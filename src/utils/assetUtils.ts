export const loadFileFromAssets = (filename: string) => {
    try {
        const filePath = new URL(`/src/assets/${filename}`, import.meta.url).href;

        // console.log(filePath);
        return filePath;
    } catch (error) {
        console.error(`Error loading file from path: ${filename}`, error);
        return '';
    }
}
