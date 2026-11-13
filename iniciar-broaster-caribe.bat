@echo off
title Broaster del Chef Caribe - Servidor Local
chcp 65001 > nul
cls
echo ==============================================================================
echo        🍗 BROASTER DEL CHEF CARIBE - MENÚ DIGITAL & MODELO PILOTO 🍗
echo        Proyecto Fondo Emprender SENA • Nodo TICs Atlántico (Ficha 2879654)
echo ==============================================================================
echo.
echo Iniciando servidor web local en el puerto 3010...
echo Acceso inmediato en tu navegador:
echo 👉 http://localhost:3010
echo.
start http://localhost:3010
python -m http.server 3010 --directory "%~dp0"
pause
