# Setup script for Longmoo Utils Monorepo (PowerShell)

Write-Host "🚀 Setting up Longmoo Utils Monorepo..." -ForegroundColor Green

# Check if pnpm is installed
if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ pnpm is not installed. Please install pnpm first:" -ForegroundColor Red
    Write-Host "   npm install -g pnpm" -ForegroundColor Yellow
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
pnpm install

# Build all packages
Write-Host "🔨 Building packages..." -ForegroundColor Cyan
pnpm build

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Available commands:" -ForegroundColor Yellow
Write-Host "  pnpm build           - Build all packages"
Write-Host "  pnpm build:common    - Build common package"
Write-Host "  pnpm build:browser   - Build browser package"
Write-Host "  pnpm build:node      - Build node package"
Write-Host "  pnpm test            - Run tests"
Write-Host "  pnpm lint            - Lint code"
