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
          ];

          shellHook = ''
            echo "Bonjour, vous êtes bien dans l'environnement de développement de Yuser."
          '';
        };
      }
    );
}
