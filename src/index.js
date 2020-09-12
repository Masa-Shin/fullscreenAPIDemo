import './style.scss'

const html = document.documentElement
const video = document.getElementById('video')

/**
 * フルスクリーンが利用可能かを返す
 * @returns {boolean}
 */
const isFullscreenEnabled = () => {
  return document.fullscreenEnabled ||
         document.webkitFullscreenEnabled ||
         document.webkitCancelFullScreen ||
         document.msFullscreenEnabled
}

/**
 * 指定した要素をフルスクリーン表示する
 *  @param element - フルスクリーンにするHTML, SVG, Math要素 
 */
const requestFullscreen = async (element = html) => {
  element.requestFullscreen = element.requestFullscreen || 
                              element.webkitRequestFullscreen || 
                              element.webkitRequestFullScreen ||
                              element.msRequestFullscreen ||
                              element.webkitEnterFullscreen

  const ret = element.requestFullscreen()

  if (ret instanceof Promise) {
    return await ret.catch(err => {
      alert(`フルスクリーンにできないようです: ${err.message} (${err.name})`);
    })
  }
}

/**
 *  フルスクリーン表示を解除する 
 */
const exitFullscreen = async () => {
  document.exitFullscreen = document.exitFullscreen ||
                            document.webkitExitFullscreen ||
                            document.webkitCancelFullScreen ||
                            document.msExitFullscreen 

  const ret = document.exitFullscreen()
 
  if (ret instanceof Promise) {
    return await ret.catch(err => {
      alert(`フルスクリーンを解除できないようです: ${err.message} (${err.name})`);
    })
  }
}

/**
 *  現在フルスクリーン表示されている要素を取得する
 */
const getFullscreenElement = () => {
  return document.fullscreenElement ||
         document.webkitFullscreenElement ||
         document.webkitCurrentFullScreenElement ||
         document.msFullscreenElement  
}

/**
 *  フルスクリーン表示を切り替える
 */
const toggleFullscreen = (element = html) => {
  const fullScreenElement = getFullscreenElement()

  if (fullScreenElement) {
    exitFullscreen()
  } else {
    requestFullscreen(element)
  }
}
 
document.getElementById('request_button').addEventListener('click', () => {
  requestFullscreen()
})
document.getElementById('exit_button').addEventListener('click', () => {
  exitFullscreen()
})
document.getElementById('toggle_button').addEventListener('click', () => {
  toggleFullscreen()
})
document.getElementById('gopher_kun').addEventListener('click', (e) => {
  toggleFullscreen(e.target)
})
document.getElementById('video').addEventListener('click', (e) => {
  toggleFullscreen(e.target)
})
document.getElementById('video_request_button').addEventListener('click', () => {
  requestFullscreen(video)
})
if (!isFullscreenEnabled()) {
  alert('このブラウザでは一部のフルスクリーン機能が利用できません。')
}
