# Releasing @qvlt/config-eslint

This package uses **tag-based publishing** with GitHub Actions for automated releases. This is the industry standard approach used by major packages like React, Vue, and Angular.

## 🚀 How It Works

1. **Create a git tag** (e.g., `v1.0.0`)
2. **Push the tag** to GitHub
3. **GitHub Actions automatically**:
   - Updates package.json version
   - Runs tests and linting
   - Publishes to npm
   - Creates a GitHub release

## 📋 Prerequisites

### 1. NPM Token Setup

- Go to [npmjs.com](https://www.npmjs.com) → Account Settings → Access Tokens
- Create a new **"Automation"** token
- Add it to GitHub repository secrets as `NPM_TOKEN`

### 2. Git Configuration

Make sure you have proper git configuration:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. pnpm Setup

This package uses pnpm exclusively. Make sure you have pnpm installed:

```bash
npm install -g pnpm
# or
corepack enable
```

## 🏷️ Creating Releases

### Option 1: Using pnpm scripts (Recommended)

```bash
# Navigate to the package directory
cd registry/config/eslint

# Patch version (0.0.2 -> 0.0.3)
pnpm run version:patch

# Minor version (0.0.2 -> 0.1.0)  
pnpm run version:minor

# Major version (0.0.2 -> 1.0.0)
pnpm run version:major

# Prerelease version (0.0.2 -> 0.0.3-0)
pnpm run version:prerelease
```

**Note**: These scripts automatically update package.json AND create the git tag, so the GitHub Actions workflow will verify the versions match.

### Option 2: Manual git commands

```bash
# Update version in package.json and create tag
pnpm version patch  # or minor, major, prerelease

# Push the tag to trigger the release
git push --follow-tags
```

### Option 3: Custom version

```bash
# Set specific version
pnpm version 1.2.3

# Push the tag
git push --follow-tags
```

## 🔄 Release Process

When you push a tag, the GitHub Actions workflow will:

1. **✅ Checkout code** with full git history
2. **✅ Setup Node.js and pnpm**
3. **✅ Install dependencies**
4. **✅ Extract version** from the git tag
5. **✅ Verify package.json version** matches the tag
6. **✅ Run tests** (if configured)
7. **✅ Run linting** (if configured)
8. **✅ Build package** (if build script exists)
9. **✅ Check if version exists** on npm
10. **✅ Publish to npm** (if version is new)
11. **✅ Create GitHub release** with changelog

## 📊 Versioning Strategy

### Semantic Versioning (SemVer)

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes, backward compatible
- **PRERELEASE** (0.0.1-alpha.0): Pre-release versions

### When to use each:

- **Patch**: Bug fixes, documentation updates
- **Minor**: New ESLint rules, new configurations
- **Major**: Breaking changes to existing configurations
- **Prerelease**: Testing new features before stable release

## 🛡️ Safety Features

- **Duplicate Prevention**: Won't publish if version already exists
- **Testing**: Runs tests before publishing
- **Linting**: Validates code quality
- **Git Integration**: Creates proper git tags and releases
- **Public Access**: Automatically publishes as public package

## 📝 Best Practices

### 1. Commit Messages

Use conventional commits for better changelog generation:

```
feat: add new React configuration
fix: resolve TypeScript import issue
docs: update README with new examples
```

### 2. Release Notes

The GitHub release will automatically include:

- Version number
- Installation instructions
- Link to changelog

### 3. Testing Before Release

```bash
# Test locally before releasing
pnpm install
pnpm run lint  # if configured
pnpm run test  # if configured
```

## 🔍 Monitoring Releases

### Check Release Status

1. Go to [GitHub Actions](https://github.com/qvlt/config-eslint/actions)
2. Look for the "Release" workflow
3. Check the logs for any issues

### Verify npm Publication

```bash
# Check if version is published
pnpm view @qvlt/config-eslint versions --json

# Install the new version
pnpm add -D @qvlt/config-eslint@latest
```

## 🚨 Troubleshooting

### "NPM_TOKEN not found"

- Add the NPM_TOKEN secret to GitHub repository settings
- Make sure it's an "Automation" token, not "Publish"

### "Version already exists"

- The workflow will skip publishing if the version already exists
- Use a different version number

### "Tests failed"

- Fix any failing tests before releasing
- The workflow will stop if tests fail

### "Git tag already exists"

- Delete the local tag: `git tag -d v1.0.0`
- Delete the remote tag: `git push origin :refs/tags/v1.0.0`
- Create a new tag with a different version

## 🎯 Example Workflow

```bash
# 1. Make your changes
git add .
git commit -m "feat: add new TypeScript configuration"

# 2. Create a minor release
pnpm run version:minor

# 3. Check GitHub Actions
# Go to: https://github.com/qvlt/config-eslint/actions

# 4. Verify on npm
npm view @qvlt/config-eslint version
```

This approach provides:

- ✅ **Automated publishing**
- ✅ **Consistent versioning**
- ✅ **Safety checks**
- ✅ **Professional releases**
- ✅ **Easy rollback** (git tags)
- ✅ **Clear history** (GitHub releases)
