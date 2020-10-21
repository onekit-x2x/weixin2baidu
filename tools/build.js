const path = require('path')

const gulp = require('gulp')
const clean = require('gulp-clean')
const less = require('gulp-less')
const rename = require('gulp-rename')
const gulpif = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')
const webpack = require('webpack')
const gulpInstall = require('gulp-install')

const config = require('./config')
const checkComponents = require('./checkcomponents')
const checkcss = require('./checkcss')
const _ = require('./utils')

const cssConfig = config.css || {}
const srcPath = config.srcPath
const distPath = config.distPath

/**
 * 获取 css 流
 */
function css(cssFileList) {
  if (!cssFileList.length) return false

  // 加上要忽略的列表
  if (config.ignore) {
    cssFileList = cssFileList.concat(config.ignore)
  }
  return gulp.src(cssFileList, {cwd: srcPath, base: srcPath})
    .pipe(checkcss.start()) // 开始处理 import
    // .pipe(gulpif(cssConfig.less && cssConfig.sourcemap, sourcemaps.init()))
    // .pipe(gulpif(cssConfig.less, less({paths: [srcPath]})))
    .pipe(checkcss.end()) // 结束处理 import
    .pipe(rename({extname: '.css'}))
    .pipe(gulpif(cssConfig.less && cssConfig.sourcemap, sourcemaps.write('./')))
    .pipe(_.logger(cssConfig.less ? 'generate' : undefined))
    .pipe(gulp.dest(distPath))
}
/**
 * 获取 less 流
 */
function buildLess(lessFileList) {
  if (!lessFileList.length) return false
  // 加上要忽略的列表
  // if (config.ignore) {
  //   lessFileList = lessFileList.concat(config.ignore)
  // }
  // console.log('build less', lessFileList, srcPath)
  return gulp.src(lessFileList, {cwd: srcPath, base: srcPath})
    // .pipe(checkcss.start()) // 开始处理 import
    .pipe(gulpif(cssConfig.less && cssConfig.sourcemap, sourcemaps.init()))
    .pipe(gulpif(cssConfig.less, less({paths: [srcPath], compress: true})))
    // .pipe(checkcss.end()) // 结束处理 import
    .pipe(rename({extname: '.css'}))
    .pipe(gulpif(cssConfig.less && cssConfig.sourcemap, sourcemaps.write('./')))
    .pipe(_.logger(cssConfig.less ? 'generate' : undefined))
    .pipe(gulp.dest(distPath))
}

/**
 * 获取 js 流
 */
function js(jsFileMap, scope) {
  const webpackConfig = config.webpack
  const webpackCallback = (err, stats) => {
    if (!err) {
      // eslint-disable-next-line no-console
      console.log(stats.toString({
        assets: true,
        cached: false,
        colors: true,
        children: false,
        errors: true,
        warnings: true,
        version: true,
        modules: false,
        publicPath: true,
      }))
    } else {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
  if (!jsFileMap.index) {
    jsFileMap.index = path.resolve(path.join(path.dirname(__dirname), '../src/index.ts'))
  }
  webpackConfig.entry = jsFileMap
  webpackConfig.output.path = distPath
  // console.log('======jsfilemap', jsFileMap)
  if (scope.webpackWatcher) {
    scope.webpackWatcher.close()
    scope.webpackWatcher = null
  }

  if (config.isWatch) {
    scope.webpackWatcher = webpack(webpackConfig).watch({
      ignored: /node_modules/,
    }, webpackCallback)
  } else {
    webpack(webpackConfig).run(webpackCallback)
  }
}

/**
 * 获取 ts 流
 */
function ts(tsFileMap, scope) {
  const webpackConfig = config.webpack
  const webpackCallback = (err, stats) => {
    if (!err) {
      // eslint-disable-next-line no-console
      console.log(stats.toString({
        assets: true,
        cached: false,
        colors: true,
        children: false,
        errors: true,
        warnings: true,
        version: true,
        modules: false,
        publicPath: true,
      }))
    } else {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  webpackConfig.entry = tsFileMap
  webpackConfig.output.path = distPath
  // console.log('=======log tsFileMap', tsFileMap, distPath)
  if (scope.webpackWatcherTS) {
    scope.webpackWatcherTS.close()
    scope.webpackWatcherTS = null
  }

  if (config.isWatch) {
    scope.webpackWatcherTS = webpack(webpackConfig).watch({
      ignored: /node_modules/,
    }, webpackCallback)
  } else {
    webpack(webpackConfig).run(webpackCallback)
  }
}

/**
 * 拷贝文件
 */
function copy(copyFileList) {
  if (!copyFileList.length) return false
  if (config.copy && config.copy.src) {
    if (!Array.isArray(config.copy.src)) {
      copyFileList.push(config.copy.src)
    } else {
      copyFileList = copyFileList.concat(config.copy.src)
    }
  }
  // 加上要忽略的列表
  if (config.copyIgnore) {
    copyFileList = copyFileList.concat(config.copyIgnore)
    // console.log('copy copyFileList', copyFileList)
  }
  return gulp.src(copyFileList, {cwd: srcPath, base: srcPath})
    .pipe(_.logger())
    .pipe(gulp.dest(distPath))
}

/**
 * 安装依赖包
 */
function install() {
  return gulp.series(async () => {
    const demoDist = config.demoDist
    const demoPackageJsonPath = path.join(demoDist, 'package.json')
    const packageJson = _.readJson(path.resolve(__dirname, '../package.json'))
    const dependencies = packageJson.dependencies || {}

    await _.writeFile(demoPackageJsonPath, JSON.stringify({dependencies}, null, '\t')) // write dev demo's package.json
  }, () => {
    const demoDist = config.demoDist
    const demoPackageJsonPath = path.join(demoDist, 'package.json')

    return gulp.src(demoPackageJsonPath)
      .pipe(gulpInstall({production: true}))
  })
}

class BuildTask {
  constructor(id, entry) {
    if (!entry) return

    this.id = id
    this.entries = Array.isArray(config.entry) ? config.entry : [config.entry]
    this.copyList = Array.isArray(config.copy) ? config.copy : []
    this.componentListMap = {}
    this.cachedComponentListMap = {}

    this.init()
  }

  init() {
    const id = this.id

    /**
     * 清空目标目录
     */
    gulp.task(`${id}-clean-dist`, () => gulp.src(distPath, {read: false, allowEmpty: true}).pipe(clean()))

    /**
     * 拷贝 demo 到目标目录
     */
    let isDemoExists = false
    gulp.task(`${id}-demo`, gulp.series(async () => {
      const demoDist = config.demoDist

      // 不检查demo是否存在
      // isDemoExists = await _.checkFileExists(path.join(demoDist, 'project.config.json'))
    }, done => {
      if (!isDemoExists) {
        const demoSrc = config.demoSrc
        const demoDist = config.demoDist

        return gulp.src('**/*', {cwd: demoSrc, base: demoSrc})
          .pipe(gulp.dest(demoDist))
      }

      return done()
    }))

    /**
     * 安装依赖包
     */
    gulp.task(`${id}-install`, install())
    /**
     * 生成package.json
     */
    gulp.task(`${id}-package-json`, (done) => {
      const pkgJson = _.readJson(path.resolve(__dirname, '../package.json'));
      const json = {};
      ['name', 'version', 'description', 'author', 'license'].forEach((item) => {
        json[item] = pkgJson[item]
      })
      _.writeFile(path.join(distPath, 'package.json'), JSON.stringify(json, null, 4))
      return done()
    })
    /**
     * 检查自定义组件
     */
    gulp.task(`${id}-component-check`, async () => {
      const entries = this.entries
      const mergeComponentListMap = {}
      for (let i = 0, len = entries.length; i < len; i++) {
        let entry = entries[i]
        entry = path.join(srcPath, `${entry}.json`)
        // eslint-disable-next-line no-await-in-loop
        const newComponentListMap = await checkComponents(entry)

        _.merge(mergeComponentListMap, newComponentListMap)
      }

      this.cachedComponentListMap = this.componentListMap
      this.componentListMap = mergeComponentListMap
    })

    /**
     * 写 json 文件到目标目录
     */
    gulp.task(`${id}-component-json`, done => {
      const jsonFileList = this.componentListMap.jsonFileList

      if (jsonFileList && jsonFileList.length) {
        return copy(this.componentListMap.jsonFileList)
      }

      return done()
    })

    /**
     * 拷贝 swan 文件到目标目录
     */
    gulp.task(`${id}-component-swan`, done => {
      const wxmlFileList = this.componentListMap.wxmlFileList

      if (wxmlFileList &&
        wxmlFileList.length &&
        !_.compareArray(this.cachedComponentListMap.wxmlFileList, wxmlFileList)) {
        return copy(wxmlFileList)
      }

      return done()
    })

    /**
     * 生成 css 文件到目标目录
     */
    gulp.task(`${id}-component-css`, done => {
      const cssFileList = this.componentListMap.cssFileList
      // console.log('cssFileList file list', cssFileList)
      if (cssFileList &&
        cssFileList.length &&
        !_.compareArray(this.cachedComponentListMap.cssFileList, cssFileList)) {
        return css(cssFileList, srcPath, distPath)
      }

      return done()
    })

    /**
     * 生成 less 文件到目标目录
     */
    gulp.task(`${id}-component-less`, done => {
      const lessFileList = this.componentListMap.lessFileList

      if (lessFileList &&
        lessFileList.length &&
        !_.compareArray(this.cachedComponentListMap.lessFileList, lessFileList)) {
        return buildLess(lessFileList, srcPath, distPath)
      }

      return done()
    })

    /**
     * 生成 js 文件到目标目录
     */
    gulp.task(`${id}-component-js`, done => {
      const jsFileList = this.componentListMap.jsFileList

      if (jsFileList &&
        jsFileList.length &&
        !_.compareArray(this.cachedComponentListMap.jsFileList, jsFileList)) {
        // js(this.componentListMap.jsFileMap, this)
      }
      js(this.componentListMap.jsFileMap, this)
      return done()
    })
    /**
     * 生成 ts 文件到目标目录
     */
    gulp.task(`${id}-component-ts`, done => {
      const tsFileList = this.componentListMap.tsFileList

      if (tsFileList &&
        tsFileList.length &&
        !_.compareArray(this.cachedComponentListMap.tsFileList, tsFileList)) {
        ts(this.componentListMap.tsFileList, this)
      }

      return done()
    })

    /**
     * 拷贝相关资源到目标目录
     */
    gulp.task(`${id}-copy`, gulp.parallel(done => {
      const copyList = this.copyList
      const copyFileList = copyList.map(dir => path.join(dir, '**/*.!(css)'))

      if (copyFileList.length) return copy(copyFileList)

      return done()
    }, done => {
      const copyList = this.copyList
      const copyFileList = copyList.map(dir => path.join(dir, '**/*.css'))

      if (copyFileList.length) return css(copyFileList, srcPath, distPath)

      return done()
    }))

    /**
     * 监听 json 变化
     */
    gulp.task(`${id}-watch-json`, () => gulp.watch(this.componentListMap.jsonFileList, {cwd: srcPath, base: srcPath}, gulp.series(`${id}-component-check`, gulp.parallel(`${id}-component-swan`, `${id}-component-css`, `${id}-component-js`, `${id}-component-json`))))

    /**
     * 监听 swan 变化
     */
    gulp.task(`${id}-watch-swan`, () => {
      this.cachedComponentListMap.wxmlFileList = null
      return gulp.watch(this.componentListMap.wxmlFileList, {cwd: srcPath, base: srcPath}, gulp.series(`${id}-component-swan`))
    })

    /**
     * 监听 css 变化
     */
    gulp.task(`${id}-watch-css`, () => {
      this.cachedComponentListMap.cssFileList = null
      return gulp.watch('**/*.css', {cwd: srcPath, base: srcPath}, gulp.series(`${id}-component-css`))
    })
    /**
     * 监听 less 变化
     */
    gulp.task(`${id}-watch-less`, () => {
      this.cachedComponentListMap.lessFileList = null
      return gulp.watch('**/*.less', {cwd: srcPath, base: srcPath}, gulp.series(`${id}-component-less`))
    })
    /**
     * 监听 ts 变化
     */
    gulp.task(`${id}-watch-ts`, () => {
      this.cachedComponentListMap.tsFileList = null
      return gulp.watch('**/*.ts', {cwd: srcPath, base: srcPath}, gulp.series(`${id}-component-ts`))
    })

    /**
     * 监听相关资源变化
     */
    gulp.task(`${id}-watch-copy`, () => {
      const copyList = this.copyList
      let copyFileList = copyList.map(dir => path.join(dir, '**/*'))
      const watchCallback = filePath => copy([filePath])

      // 加上要忽略的列表
      if (config.copyIgnore) {
        copyFileList = copyFileList.concat(config.copyIgnore)
      }
      return gulp.watch(copyFileList, {cwd: srcPath, base: srcPath})
        .on('change', watchCallback)
        .on('add', watchCallback)
        .on('unlink', watchCallback)
    })

    /**
     * 监听 demo 变化
     */
    gulp.task(`${id}-watch-demo`, () => {
      const demoSrc = config.demoSrc
      const demoDist = config.demoDist
      const watchCallback = filePath => gulp.src(filePath, {cwd: demoSrc, base: demoSrc})
        .pipe(gulp.dest(demoDist))

      return gulp.watch('**/*', {cwd: demoSrc, base: demoSrc})
        .on('change', watchCallback)
        .on('add', watchCallback)
        .on('unlink', watchCallback)
    })

    /**
     * 监听安装包列表变化
     */
    gulp.task(`${id}-watch-install`, () => gulp.watch(path.resolve(__dirname, '../package.json'), install()))

    /**
     * 构建相关任务
     */
    // gulp.task(`${id}-build`, gulp.series(`${id}-clean-dist`, `${id}-component-check`, gulp.parallel(`${id}-component-less`)))
    gulp.task(`${id}-build`, gulp.series(`${id}-clean-dist`, `${id}-component-check`, gulp.parallel(`${id}-component-swan`, `${id}-component-js`, `${id}-component-less`, `${id}-component-css`, `${id}-component-json`, `${id}-copy`, `${id}-package-json`)))

    gulp.task(`${id}-watch`, gulp.series(`${id}-build`, `${id}-demo`, `${id}-install`, gulp.parallel(`${id}-watch-swan`, `${id}-watch-css`, `${id}-watch-json`, `${id}-watch-copy`, `${id}-watch-install`, `${id}-watch-demo`, `${id}-watch-less`, `${id}-watch-ts`)))

    gulp.task(`${id}-dev`, gulp.series(`${id}-build`, `${id}-demo`, `${id}-install`))

    gulp.task(`${id}-default`, gulp.series(`${id}-build`))
  }
}

module.exports = BuildTask
