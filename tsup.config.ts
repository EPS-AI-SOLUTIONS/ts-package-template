import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  // ignoreDeprecations: tsup wstrzykuje baseUrl do DTS builda, co pod TS 6.x
  // podnosi TS5101 (deprecated); scoped tu, nie w tsconfig konsumentow.
  dts: { compilerOptions: { ignoreDeprecations: "6.0" } },
  sourcemap: true,
  clean: true,
  target: "node22",
});
