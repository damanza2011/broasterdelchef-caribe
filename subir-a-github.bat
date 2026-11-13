@echo off
title Subir Broaster del Chef Caribe a GitHub
chcp 65001 > nul
cls
echo ==============================================================================
echo        🍗 SUBIR BROASTER DEL CHEF CARIBE A GITHUB 🍗
echo ==============================================================================
echo.
set /p REPO_URL="Pega la URL de tu repositorio de GitHub (ej: https://github.com/usuario/broaster-caribe.git): "
if "%REPO_URL%"=="" (
    echo No se ingreso ninguna URL. Operacion cancelada.
    pause
    exit /b
)
cd /d "%~dp0"
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main
echo.
echo Proceso finalizado.
pause
