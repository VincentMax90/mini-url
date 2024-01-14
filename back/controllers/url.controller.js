const UrlService = require("../services/url.service");

class UrlController {
  static async createUrl(req, res) {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "Long URL is required" });
    }

    try {
      const createdUrl = await UrlService.createUrl(url);
      const miniUrl = await UrlService.createMiniUrl(createdUrl.id);

      createdUrl.miniUrl = miniUrl;

      res.json({ url: createdUrl });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async findMiniUrl(req, res) {
    const { id } = req.params;

    try {
      const miniUrl = await UrlService.findMiniUrlById(id);
      res.json({ miniUrl });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UrlController;
