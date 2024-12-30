{
  description = "Le flake Nix de Yuser";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
		flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
	{ self, nixpkgs, flake-utils }:
		flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShellNoCC {
					
          packages = with pkgs; [
						deno
						(writeShellScriptBin "setup" ''
							${lib.getExe deno} install --allow-scripts
						'')
						(writeShellScriptBin "dev" ''
							${lib.getExe deno} run dev
						'')
          ];

          shellHook = ''
            echo "Bonjour, vous êtes bien dans l'environnement de développement de Yuser."
          '';
        };

				packages.default = pkgs.stdenv.mkDerivation {
					name = "Yuser";
					src = ./.;

					nativeBuildInputs = with pkgs; [
						deno
					];
					buildPhase = ''
						HOME="$(mktemp -d)"
						deno install --allow-scripts
						deno run build
					'';
					installPhase = ''
						mkdir -p $out/test
						cp -r build/* $out
					'';

					outputHashAlgo = "sha256";
					outputHashMode = "recursive";
					outputHash = "";

					impureEnvVars = [ "NIX_HASH_ALGO" ];
				};
      }
    );
}
