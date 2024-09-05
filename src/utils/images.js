function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const projectImages = {
    billetin: importAll(require.context('../images/projects/billetin', false, /\.(png|jpe?g|svg)$/)),
    memoria: importAll(require.context('../images/projects/memoria', false, /\.(png|jpe?g|svg)$/)),
};

export default projectImages;
