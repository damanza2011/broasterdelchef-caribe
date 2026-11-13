@echo off
title Conectar Vercel con adso-tic
chcp 65001 > nul
cls
echo ==============================================================================
echo        🍗 CONECTAR CUENTA VERCEL ADSO-TIC 🍗
echo ==============================================================================
echo.
echo Actualmente la sesion activa de Vercel en este equipo es: dmtelecos-1878
echo.
echo Para cambiar a la cuenta o equipo 'adso-tic', vamos a iniciar sesion:
npx vercel login
echo.
echo Desplegando en adso-tic...
npx vercel --prod
pause
