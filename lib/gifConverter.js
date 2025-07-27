const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');

const ffmpeg = createFFmpeg({ log: true });

async function GIFBufferToVideoBuffer(buffer) {
    try {
        if (!ffmpeg.isLoaded()) {
            await ffmpeg.load();
        }

        // Load the buffer into FFmpeg
        ffmpeg.FS('writeFile', 'input.gif', await fetchFile(buffer));

        // Convert the GIF to MP4 format
        await ffmpeg.run('-i', 'input.gif', '-movflags', 'faststart', '-pix_fmt', 'yuv420p', '-vf', 'scale=320:-1', 'output.mp4');

        // Get the processed video
        const data = ffmpeg.FS('readFile', 'output.mp4');

        return Buffer.from(data.buffer);
    } catch (error) {
        console.error("GIF to Video Conversion Failed:", error);
        return null;
    }
}

// Export function for use in other files
module.exports = { GIFBufferToVideoBuffer };
