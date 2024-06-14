
export default class AppController {
  /**
   * Handles the GET request for the homepage.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}
