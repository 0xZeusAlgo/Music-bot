module.exports = {
    app: {
        px: '!!!',
        token: 'OTA1NTAxMjQ0NDQ0MDE2NzIy.YYK_wA._eHTwrrmaMyYPl5eibSJf-WobOg',
        playing: 'by Zerio ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
