const UrlService = require('../services/url.service');



class UrlController {
  static async createUrl(req, res) {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'Long URL is required' });
    }

    try {
      const url = await UrlService.createUrl(url);
      res.json({ url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  static async createMiniUrl(req, res) {
    const { urlId } = req.params;

    try {
      const miniUrl = await UrlService.createMiniUrl(urlId);
      res.json({ miniUrl });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UrlController;
