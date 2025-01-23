{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  packages = with pkgs; [bun lefthook nodejs nodePackages.prettier];
}
