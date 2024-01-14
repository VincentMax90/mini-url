const Url = require('../models/Url.model');

class UrlService {
  static async createUrl(url) {
    try {
      const existingUrl = await Url.findOne({ where: {  url } });

      if (existingUrl) {
        return existingUrl;
      }

      const newUrl = await Url.create({ url });
      return newUrl;
    } catch (error) {
      throw new Error('Error creating URL: ' + error.message);
    }
  }


  









  static async createMiniUrl(urlId) {
    try {
      const url = await Url.findByPk(urlId);
      if (!url) {
        throw new Error('URL not found');
      }

      const miniUrl = `http://localhost:3000/${url.id}`;
      url.miniUrl = miniUrl;
      await url.save();

      return miniUrl;
    } catch (error) {
      throw new Error('Error creating mini URL: ' + error.message);
    }
  }
}

module.exports = UrlService;