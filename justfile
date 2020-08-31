run:
  deno run -c tsconfig.json --allow-net --allow-read --allow-env src/main/mandarine/app.ts

dev:
  mandarine run --entry-point=src/main/mandarine/app.ts --watch
