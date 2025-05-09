import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";

function transformLitClassSyntax() {
  return {
    name: 'transform-lit-class-syntax',
    // Sử dụng any để bỏ qua kiểm tra kiểu
    renderChunk(code: string) {
      // Biến đổi cú pháp khai báo class
      return code.replace(
        /let\s+([A-Z]\w+)\s+=\s+class\s+extends/g, 
        'class $1 extends'
      );
    }
  };
}

function removeLicenseComments() {
  return {
    name: 'remove-license-comments',
    renderChunk(code: string) {
      // Loại bỏ tất cả các license comment
      return code.replace(
        /\/\*\*\s*\n\s*\*\s*@license[\s\S]*?(?:\*\/)/g,
        ''
      );
    }
  };
}

export default defineConfig({
  plugins: [
    libInjectCss(),
    transformLitClassSyntax(),
    removeLicenseComments()
  ],
  build: {
    lib: {
      entry: "src/gtel-dashboard.ts", // your web component source file
      formats: ["es"],
    },
    outDir: "../../Gtel.Client/App_Plugins/GtelDashboard", // all compiled files will be placed here
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      external: [/^@umbraco/], // ignore the Umbraco Backoffice package in the build
      output: {
        preserveModules: false, // Giữ cấu trúc module trong dev để dễ debug, gộp trong prod để tối ưu hiệu suất
        compact: true, // Giảm số dòng và khoảng trắng trong prod, giữ định dạng dễ đọc trong dev
      },
    },
    minify: "terser", // Sử dụng Terser để minify code
    terserOptions: {
      ecma: 2020, // Sử dụng cú pháp ECMAScript 2020
      module: true, // Báo cho Terser biết đang xử lý ES modules
      format: {
        semicolons: true, // Luôn giữ dấu chấm phẩy để tránh lỗi cú pháp
        beautify: false, // Giữ code dễ đọc trong dev, minify triệt để trong prod
        comments: false  // Tắt tất cả comments trong prod để giảm kích thước file
      },
      compress: {
        sequences: false, // Tắt tính năng gộp nhiều câu lệnh bằng dấu phẩy (ngăn lỗi SonarQube)
        conditionals: true, // Tối ưu câu lệnh điều kiện (if-else)
        dead_code: true, // Loại bỏ code không bao giờ được thực thi
        drop_console: true, // Loại bỏ console.log trong prod, giữ lại trong dev để debug
        drop_debugger: true, // Loại bỏ lệnh debugger trong prod
      },
      mangle: {
        keep_classnames: true, // Giữ tên lớp để đảm bảo hoạt động đúng với decorators
        keep_fnames: false, // Giữ tên hàm trong dev để dễ debug, minify trong prod
      },
    },
  },
  base: "/App_Plugins/GtelDashboard/", // the base path of the app in the browser (used for assets)
});
