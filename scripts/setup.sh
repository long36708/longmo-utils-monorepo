#!/bin/bash
# Setup script for Longmoo Utils Monorepo

echo "🚀 Setting up Longmoo Utils Monorepo..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null
then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "   npm install -g pnpm"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build all packages
echo "🔨 Building packages..."
pnpm build

echo "✅ Setup complete!"
echo ""
echo "Available commands:"
echo "  pnpm build           - Build all packages"
echo "  pnpm build:common    - Build common package"
echo "  pnpm build:browser   - Build browser package"
echo "  pnpm build:node      - Build node package"
echo "  pnpm test            - Run tests"
echo "  pnpm lint            - Lint code"
