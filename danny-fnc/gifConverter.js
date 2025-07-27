const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');

const ffmpeg = createFFmpeg({ log: true });

async function GIFBufferToVideoBuffer(buffer) {
    try {
        if (!ffmpeg.isLoaded()) {
            await ffmpeg.load();
        }

        ffmpeg.FS('writeFile', 'input.gif', await fetchFile(buffer));

        await ffmpeg.run('-i', 'input.gif', '-movflags', 'faststart', '-pix_fmt', 'yuv420p', '-vf', 'scale=320:-1', 'output.mp4');

        const data = ffmpeg.FS('readFile', 'output.mp4');

        return Buffer.from(data.buffer);
    } catch (error) {
        console.error("GIF to Video Conversion Failed:", error);
        return null;
    }
}

module.exports = { GIFBufferToVideoBuffer };
