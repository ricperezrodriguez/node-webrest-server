import express from "express";
import path from "path";

interface Options {
  port: number;
  public_path?: string;
}
export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;

  constructor(option: Options) {
    const { port, public_path = "public" } = option;
    this.port = port;
    this.publicPath = public_path;
  }

  async start() {
    // Middlewares

    // Public Folder
    this.app.use(express.static("public"));

    this.app.get("*", (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      );
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
