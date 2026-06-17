import jsQR from "jsqr";
import jsQR from "jsqr";
import { Jimp } from "jimp";

async function scaningFunc(imagePath) {
    const image = await Jimp.read(imagePath);
    const code = jsQR(image.bitmap.data, image.bitmap.width, image.bitmap.height);

    if (code == null) {
        throw new Error("code not found");
    }
    return code.data;
}

export { scaningFunc };

