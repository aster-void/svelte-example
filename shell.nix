{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  packages = with pkgs; [bun nodejs nodePackages.prettier];
}
