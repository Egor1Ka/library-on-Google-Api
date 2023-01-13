const onScroll = ()=>{
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll/height) * 100

    return scrolled
}

export default onScroll