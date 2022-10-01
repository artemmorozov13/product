import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuildOptions } from "./types/config";

export default function buildLoaders({isDev}:BuildOptions):webpack.RuleSetRule[]  {
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath:string) => Boolean(resPath.includes(".module.")),
                    localIdentName: isDev ? "[path]_[name]__[local]" : "[hash:base64:8]"
                }
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        scssLoader,
        svgLoader,
        fileLoader
    ]
}