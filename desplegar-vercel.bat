@echo off
title Desplegar Broaster del Chef Caribe en Vercel
chcp 65001 > nul
cls
echo ==============================================================================
echo        🍗 DESPLEGAR BROASTER DEL CHEF CARIBE EN VERCEL 🍗
echo ==============================================================================
echo.
echo Ejecutando despliegue en Vercel...
cd /d "%~dp0"
npx vercel
pause
