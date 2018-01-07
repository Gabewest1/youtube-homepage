const $removePlaylistBtn = Array.from(document.getElementsByClassName("close-icon"))
const $showMoreVideosBtn = Array.from(document.querySelectorAll(".arrow.right"))
const $showLessVideosBtn = Array.from(document.querySelectorAll(".arrow.left"))
const $menuBtns = Array.from(document.getElementsByClassName("bar-icon"))
const $menu = document.getElementById("pusher")
const $mainContent = document.getElementById("main-content")
const $undoClosedPlaylist = document.getElementsByClassName("undo")[0]

$removePlaylistBtn.forEach($btn => {
    $btn.addEventListener("click", () => {
        const $playlist = findPlaylist($btn)
        console.log("CLOSING PLAYLIST:", $playlist)
        closePlaylist($playlist)
    })
})

$showLessVideosBtn.forEach($btn => {
    $btn.addEventListener("click", () => {
        const $playlist = findPlaylist($btn)
        console.log("CLOSING PLAYLIST:", $playlist)
        showLessVideos($playlist)
    })
})

$showMoreVideosBtn.forEach($btn => {
    $btn.addEventListener("click", () => {
        const $playlist = findPlaylist($btn)
        console.log("CLOSING PLAYLIST:", $playlist)
        showMoreVideos($playlist)
    })
})

$menuBtns.forEach(btn => btn.addEventListener("click", toggleMenu))

$undoClosedPlaylist.addEventListener("click", function() {
    const $playlist = findPlaylist(this)
    console.log("OPENING PLAYLIST:", $playlist)
    openPlaylist($playlist)
})

function toggleMenu() {
    $menu.classList.toggle("active")
}

function closePlaylist($playlist) {
    $playlist.classList.add("close")
}

function openPlaylist($playlist) {
    $playlist.classList.remove("close")
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
    $playlist.classList.add("active")
}

function showLessVideos($playlist) {
    $playlist.classList.remove("active")
}