#!/bin/bash
npm run dev > dev.log 2>&1 &
PID=$!
sleep 15
curl -I http://localhost:3000
kill $PID
