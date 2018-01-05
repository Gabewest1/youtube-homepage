const $removePlaylistBtn = Array.from(document.getElementsByClassName("close-icon"))
const $showMoreVideosBtn = Array.from(document.getElementsByClassName("arrow"))
console.log($removePlaylistBtn)

$removePlaylistBtn.forEach($btn => {
    $btn.addEventListener("click", () => {
        const $playlist = findPlaylist($btn)
        console.log("CLOSING PLAYLIST:", $playlist)
        closePlaylist($playlist)
    })
})

$showMoreVideosBtn.forEach($btn => {
    $btn.addEventListener("click", () => {
        const $playlist = findPlaylist($btn)
        console.log("CLOSING PLAYLIST:", $playlist)
        showMoreVideos($playlist)
    })
})

function closePlaylist($playlist) {
    $playlist.classList.add("active")
}

function findPlaylist($element) {
    let isPlaylistElement = $element.classList.contains("playlist")

    if (isPlaylistElement) {
        return $element
    }

    let $parentElement = $element.parentElement

    while (!$parentElement.classList.contains("playlist")) {
        $parentElement = $parentElement.parentElement
    }

    return $parentElement
}

function showMoreVideos($playlist) {
    const $videos = $playlist.getElementsByClassName("videos")[0]
    console.log("VIDEOS:", $videos)
    $videos.classList.add("active")
}