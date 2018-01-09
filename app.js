const $removePlaylistBtn = Array.from(document.getElementsByClassName("close-icon"))
const $showMoreVideosBtn = Array.from(document.querySelectorAll(".arrow.right"))
const $showLessVideosBtn = Array.from(document.querySelectorAll(".arrow.left"))
const $toggleMenuBtns = Array.from(document.getElementsByClassName("bar-icon"))
const $menu = document.getElementById("pusher")
const $mainContent = document.getElementById("main-content")
const $undoClosedPlaylistBtns = Array.from(document.getElementsByClassName("undo"))
const $expandRecommendSectionBtn = document.getElementById("expand-recommended")
const $searchBtns = Array.from(document.getElementsByClassName("search-icon"))
const $headers = document.getElementById("headers")
const $quitSearchBtn = document.getElementById("quit-search")
let isSmallHeaderResizeHandlerSet = false

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

$toggleMenuBtns.forEach(btn => btn.addEventListener("click", toggleMenu))

$undoClosedPlaylistBtns.forEach($btn => {
    $btn.addEventListener("click", function() {
        const $playlist = findPlaylist(this)
        console.log("OPENING PLAYLIST:", $playlist)
        openPlaylist($playlist)
    })
})

$expandRecommendSectionBtn.addEventListener("click", function() {
    const $playlist = findPlaylist(this)

    $playlist.classList.toggle("expand")
})
console.log("SEARCH:", $searchBtns)
$searchBtns.forEach($btn => $btn.addEventListener("click", renderHeader.bind($btn, true)))

$quitSearchBtn.addEventListener("click", () => $headers.classList.remove("active"))

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

function renderHeader(shouldRenderSmallHeader = false) {
    console.log("AYYY:", shouldRenderSmallHeader)
    const desktopBreakpoint = 662
    shouldRenderSmallHeader = shouldRenderSmallHeader || $headers.classList.contains("active")

    if (shouldRenderSmallHeader && window.innerWidth < desktopBreakpoint) {
        $headers.classList.add("active")

        //Need to set a handler to return the header to its default version if the client scrolls
        //back into desktop mode.
        if (!isSmallHeaderResizeHandlerSet) {
            isSmallHeaderResizeHandlerSet = true
            window.addEventListener("resize", () => renderHeader())
        }
    } else {
        $headers.classList.remove("active")

        if (isSmallHeaderResizeHandlerSet) {
            isSmallHeaderResizeHandlerSet = false
            window.removeEventListener("resize", () => renderHeader())
        }
    }
}
