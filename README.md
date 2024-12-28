# Câu 1: Quá trình biên dịch của Typescript

### Bước 1: Bắt đầu

- Cài đặt Typescript.

```bash
npm install -g typescript
```

- Khởi tạo Typescript trong project.

```bash
tsc --init
```

- Khi chạy câu lệnh này sẽ khỏi tạo 1 file tsconfig.json trong thư mục. File này sẽ chứa các cấu hình cơ bản của Typescript.
- Ví dụ file `tsconfig.json` cơ bản:

```json
{
  "compilerOptions": {
    "target": "ES5", // Chỉ định phiên bản JS sau khi biên dịch
    "module": "CommonJS", // Chỉ định hệ thống module
    "outDir": "./dist", // Thư mục đầu ra chứa file .js sau khi biên dịch
    "strict": true // Bật chế độ kiểm tra nghiêm ngặt các kiểu dữ liệu của hàm
  },
  "include": ["./src/**/*.ts"] // Chỉ định các file hoặc thư mục cần được biên dịch
}
```

### Bước 2: Tạo file Typescript

- Tạo 1 file `.ts` và viết thử code. Ví dụ file `test.ts`:

```ts
const sum = (number1: number, number2: number) => {
  return number1 + number2;
};
console.log(sum(1, 2));
```

- Ở bước này Typescript sẽ kiểm tra kiểu dữ liệu của các biến, hàm, tham số. Nếu sai sẽ báo lỗi cho người dùng biết ở bước này.

### Bước 3 : Biên dịch Typescript sang Javascript

- Mở Command line trong folder chứa file `.ts` và khởi chạy lệnh:

```bash
tsc test.ts
```

- Khi chạy dòng lệnh này, Typescript sẽ chuyển đổi thành mã Javascript tương đương đồng thời cũng loại bỏ các thông tin đặc trưng của Typescript như khai báo kiểu dữ liệu vì Javascript không hỗ trợ.
- Kết quả:
  `test.ts` file:

```ts
const sum = (number1: number, number2: number) => {
  return number1 + number2;
};
console.log(sum(1, 2));
```

`test.js` file:

```js
var sum = function (number1, number2) {
  return number1 + number2;
};
console.log(sum(1, 2));
```

### Bước 4: Chạy code Javascript

- Sau khi hoàn thành các bước trên, trình biên dịch sẽ tạo ra các file Javascript `.js`.
- Các file này có thể chạy bình thường trên browser hoặc trong môi trường Node.js.
- Ví dụ, khi chạy file `test.js`:

```js
3
```
