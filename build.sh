#!/bin/bash

echo "=========================================="
echo "Building Subscribe to Comments Reloaded"
echo "=========================================="

# Install requirements
echo "Installing requirements..."
npm install

# Build and create distribution
echo "Performing build..."
npm run build

echo "=========================================="
echo "Build complete!"
echo "Distribution:  ./dist/subscribe-to-comments-reloaded.zip"
echo "=========================================="

# Show zip contents summary
echo ""
echo "Zip contents:"
unzip -l dist/subscribe-to-comments-reloaded.zip | tail -1
