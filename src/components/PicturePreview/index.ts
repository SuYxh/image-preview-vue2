import ImagePreview from './PicturePreview'

export function ImagePreviewUtil({ ...rest }) {
  return ImagePreview({
    ...rest
  })
}

export function PicturePreviewVue(data: any) {
  let _data = data
  if (Object.prototype.toString.call(data) === '[object String]') {
    // ^ 仅传入一个地址
    _data = {
      urlList: [_data],
      initialIndex: 0
    }
  } else if (Object.prototype.toString.call(data) === '[object Object]') {
    const index = data.urlList.indexOf(data.url)
    _data = {
      urlList: data.urlList,
      initialIndex: index
    }
  }
  ImagePreviewUtil(_data)
}
