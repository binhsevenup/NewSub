var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
document.addEventListener('DOMContentLoaded', function () {
    loadSongs();
});

function loadSongs() {

    $.ajax({
        url: MY_API,
        type: 'GET',
        contentType: "application/json; charset = utf-8",

        success: function (data, textStatus, jqXHR) {
            // alert('Success')
            console.log('Success');
            console.log(data);
            console.log('-----');
            console.log(data.responseText);
            console.log('-----');
            console.log(textStatus);
            console.log('-----');
            console.log(jqXHR);
            // if (this.readyState === 4 && this.status === 200) {
                // var listSong = JSON.parse(this.responseText);
                var content = '';
                for (var i = 0; i < data.length; i++) {
                    content += '<div class="song-item">';
                    content += '<div class="song-index">' + (i + 1) + '</div>';
                    content += '<div class="song-thumbnail">';
                    content += '<img src="' +data[i].thumbnail + '" alt="">';
                    content += '</div>';
                    content += '<div class="song-infor">';
                    content += '<div class="song-name">' + data[i].name + '</div>';
                    content += '<div class="song-singer">' + data[i].singer + '</div>';
                    content += '</div>';
                    content += '<div class="song-control" onclick="playSong(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\')">Play</div>';
                    // content += '<div class="song-control"><a href="song-detail.html?id=' + listSong[i].id + '">Detail</a></div>';
                    content += '</div>';
                    $('#list-song').html(content);
                }

            // }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // alert('Error')
            console.log('error');
            console.log(jqXHR);
            console.log('-----');
            console.log(jqXHR.responseText);
            console.log('-----');
            console.log(jqXHR.responseJSON.error);
            console.log('-----');
            console.log(textStatus);
            console.log('-----');
            console.log(errorThrown);
        },
    });
};
function playSong(link, name, singer) {
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
}