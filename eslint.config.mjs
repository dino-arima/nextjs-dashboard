import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  basePath: __dirname,
});

const eslintConfig = [
  // next/core-web-vitals の設定を Flat Config 形式に変換して展開
  ...compat.extends("next/core-web-vitals"),
  
  // 無視するファイルの設定（旧 globalIgnores の代わり）
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
