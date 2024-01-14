const Url = require("../models/Url.model");
class UrlService {
  static async createUrl(url) {
    try {
    

      const newUrl = await Url.create({ url });
      return newUrl;
    } catch (error) {
      throw new Error("Error creating URL: " + error.message);
    }
  }

  static async createMiniUrl(urlId) {
    try {
      const url = await Url.findByPk(urlId);
      if (!url) {
        throw new Error("URL not found");
      }

      if (!url.miniUrl) {
        const miniUrl = `http://localhost:3000/${url.id}`;
        url.miniUrl = miniUrl;
        await url.save(); // Actualiza la miniURL en la base de datos
      }

      return url.miniUrl;
    } catch (error) {
      throw new Error("Error creating mini URL: " + error.message);
    }
  }


  static async findUrlById(urlId) {
    try {
      const url = await Url.findByPk(urlId);
      if (!url) {
        throw new Error("URL not found");
      }
  
      return url.url || null; 
    } catch (error) {
      throw new Error("Error finding URL by ID: " + error.message);
    }
  }
  
  
}

module.exports = UrlService;
