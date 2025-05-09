import { defineConfig } from "vite";

function transformLitClassSyntax() {
  return {
    name: 'transform-lit-class-syntax',
    renderChunk(code: string) {
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
      return code.replace(
        /\/\*\*\s*\n\s*\*\s*@license[\s\S]*?(?:\*\/)/g,
        ''
      );
    }
  };
}

export default defineConfig(({ mode }) => {
  // Xác định môi trường build hiện tại
  const isProd = mode === "production";

  return {
    plugins: [
      transformLitClassSyntax(),
      removeLicenseComments()
    ],
    build: {
      lib: {
        entry: {
          manifests: "manifests.ts", // File entry chính của ứng dụng
        },
        formats: ["es"], // Xuất ra định dạng ES modules
      },
      outDir: "../../Gtel.Client/App_Plugins/Comments", // Thư mục đích đặt các file sau khi build
      emptyOutDir: true, // Xóa thư mục đích trước khi build
      sourcemap: !isProd, // Tạo sourcemap trong dev để debug, bỏ trong prod để giảm kích thước
      rollupOptions: {
        external: [/^@umbraco/], // Loại trừ các package Umbraco khỏi quá trình bundle
        output: {
          preserveModules: !isProd, // Giữ cấu trúc module trong dev để dễ debug, gộp trong prod để tối ưu hiệu suất
          compact: isProd, // Giảm số dòng và khoảng trắng trong prod, giữ định dạng dễ đọc trong dev
          comments: false
        },
      },
      minify: "terser", // Sử dụng Terser để minify code
      terserOptions: {
        ecma: 2020, // Sử dụng cú pháp ECMAScript 2020
        module: true, // Báo cho Terser biết đang xử lý ES modules
        format: {
          semicolons: true, // Luôn giữ dấu chấm phẩy để tránh lỗi cú pháp
          beautify: !isProd, // Giữ code dễ đọc trong dev, minify triệt để trong prod
        },
        compress: {
          sequences: false, // Tắt tính năng gộp nhiều câu lệnh bằng dấu phẩy (ngăn lỗi SonarQube)
          conditionals: true, // Tối ưu câu lệnh điều kiện (if-else)
          dead_code: true, // Loại bỏ code không bao giờ được thực thi
          drop_console: isProd, // Loại bỏ console.log trong prod, giữ lại trong dev để debug
          drop_debugger: isProd, // Loại bỏ lệnh debugger trong prod
        },
        mangle: {
          keep_classnames: true, // Giữ tên lớp để đảm bảo hoạt động đúng với decorators
          keep_fnames: !isProd, // Giữ tên hàm trong dev để dễ debug, minify trong prod
        },
      },
    },
    base: "/App_Plugins/Comments/", // URL cơ sở để tải các tài nguyên tĩnh trong trình duyệt
  };
});


