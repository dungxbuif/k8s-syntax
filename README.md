# K8s Syntax

Web tĩnh để luyện kubectl command, quick config, YAML field và output syntax.
App này được tách từ Obsidian Vault thành repo/deployment riêng.

## Chạy

Từ thư mục app:

~~~bash
npm run serve
~~~

Mở http://localhost:4174.

Không mở trực tiếp bằng file:// vì ES modules cần static server.

## Cách dùng

1. Bấm Bắt đầu buổi.
2. Chọn Luyện bài.
3. Tự gõ command hoặc điền từng YAML field.
4. Submit để xem lỗi, giải thích và nguồn.
5. Kết thúc buổi để xem Mistakes & next actions.
6. Export Markdown để lưu report hoặc đưa phần lỗi vào Anki.

## Dữ liệu

- Question bank: src/questions.mjs.
- Kubectl option catalog: src/kubectl-catalog.mjs, snapshot từ kubectl v1.36.1; gồm toàn bộ global options và toàn bộ option block của các built-in top-level/subcommand được binary discover qua --help.
- Evaluation/persistence helpers: src/engine.mjs.
- Attempts và reports: browser LocalStorage key k8s-syntax-v1.
- Không gửi dữ liệu ra ngoài và không cần Kubernetes cluster.

## Container

~~~bash
docker build -t homelab/k8s-syntax:local .
docker run --rm -p 8080:80 homelab/k8s-syntax:local
curl http://localhost:8080/healthz
~~~

## Mở rộng question bank

Mỗi command question cần id, mode=command, category, prompt, expected, explanation, source và tags.

Mỗi field question cần id, mode=fields, category, prompt, fields, explanation, source và tags.

Các field trong fields được chấm riêng để report có thể chỉ ra chính xác path hay sai.

## Kiểm thử

~~~bash
npm test
~~~
