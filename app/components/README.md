    # Components Directory Structure

This directory contains all React components organized by their purpose and scope.

## Directory Structure

```
components/
├── ui/              # Reusable, atomic UI components
│   ├── Button/
│   ├── Input/
│   ├── Card/
│   └── ...
├── layout/          # Page structure components
│   ├── Header/
│   ├── Footer/
│   ├── Sidebar/
│   └── ...
├── forms/           # Form-related components
│   ├── FormField/
│   ├── FormBuilder/
│   ├── Validation/
│   └── ...
├── features/        # Business logic components
│   ├── auth/
│   ├── dashboard/
│   ├── profile/
│   └── ...
├── common/          # Shared components across features
│   ├── LoadingSpinner/
│   ├── ErrorBoundary/
│   └── ...
├── icons/           # Icon components
│   ├── IconLibrary/
│   ├── CustomIcons/
│   └── ...
├── modals/          # Modal and dialog components
│   ├── Modal/
│   ├── Dialog/
│   ├── Overlay/
│   └── ...
├── data-display/    # Data visualization components
│   ├── Table/
│   ├── Chart/
│   ├── List/
│   └── ...
├── feedback/        # User feedback components
│   ├── Alert/
│   ├── Notification/
│   ├── Toast/
│   └── ...
├── navigation/      # Navigation components
│   ├── Menu/
│   ├── Breadcrumb/
│   ├── Pagination/
│   └── ...
└── media/           # Media components
    ├── Image/
    ├── Video/
    ├── AudioPlayer/
    └── ...
```

## Component Organization Guidelines

### 1. **ui/** - Atomic UI Components
- **Purpose**: Reusable, presentational components
- **Examples**: Button, Input, Card, Badge, Avatar
- **Characteristics**: No business logic, highly reusable, styled consistently
- **Naming**: Use PascalCase (e.g., `Button.tsx`, `PrimaryButton.tsx`)

### 2. **layout/** - Layout Components
- **Purpose**: Define page structure and layout
- **Examples**: Header, Footer, Sidebar, MainLayout, Grid
- **Characteristics**: Handle layout logic, responsive design
- **Naming**: Use PascalCase (e.g., `Header.tsx`, `MainLayout.tsx`)

### 3. **forms/** - Form Components
- **Purpose**: Form-related functionality
- **Examples**: FormField, FormBuilder, Validation, FormWizard
- **Characteristics**: Handle form state, validation, submission
- **Naming**: Use PascalCase (e.g., `FormField.tsx`, `FormBuilder.tsx`)

### 4. **features/** - Feature-Specific Components
- **Purpose**: Business logic components for specific features
- **Examples**: UserProfile, Dashboard, ProductCard, OrderSummary
- **Characteristics**: Contain business logic, feature-specific styling
- **Structure**: Group by feature domain (e.g., `auth/`, `dashboard/`, `profile/`)

### 5. **common/** - Shared Components
- **Purpose**: Components used across multiple features
- **Examples**: LoadingSpinner, ErrorBoundary, PageWrapper
- **Characteristics**: Generic functionality, no business logic
- **Naming**: Use PascalCase (e.g., `LoadingSpinner.tsx`)

### 6. **icons/** - Icon Components
- **Purpose**: Icon libraries and custom icons
- **Examples**: IconLibrary, CustomIcons, IconWrapper
- **Characteristics**: SVG icons, icon management
- **Naming**: Use PascalCase (e.g., `IconLibrary.tsx`)

### 7. **modals/** - Modal Components
- **Purpose**: Overlay and dialog components
- **Examples**: Modal, Dialog, Overlay, Popup
- **Characteristics**: Handle modal state, backdrop, animations
- **Naming**: Use PascalCase (e.g., `Modal.tsx`, `ConfirmDialog.tsx`)

### 8. **data-display/** - Data Visualization
- **Purpose**: Display and visualize data
- **Examples**: Table, Chart, List, DataGrid, Timeline
- **Characteristics**: Handle data rendering, sorting, filtering
- **Naming**: Use PascalCase (e.g., `DataTable.tsx`, `Chart.tsx`)

### 9. **feedback/** - User Feedback
- **Purpose**: Provide user feedback and status
- **Examples**: Alert, Notification, Toast, ProgressBar
- **Characteristics**: Handle user notifications, loading states
- **Naming**: Use PascalCase (e.g., `Alert.tsx`, `Toast.tsx`)

### 10. **navigation/** - Navigation Components
- **Purpose**: Navigation and routing components
- **Examples**: Menu, Breadcrumb, Pagination, Tabs
- **Characteristics**: Handle navigation state, routing
- **Naming**: Use PascalCase (e.g., `Navigation.tsx`, `Breadcrumb.tsx`)

### 11. **media/** - Media Components
- **Purpose**: Handle media content
- **Examples**: Image, Video, AudioPlayer, Gallery
- **Characteristics**: Media handling, optimization, lazy loading
- **Naming**: Use PascalCase (e.g., `Image.tsx`, `VideoPlayer.tsx`)

## Component File Structure

Each component should follow this structure:

```
ComponentName/
├── index.tsx        # Main component file
├── ComponentName.tsx # Component implementation
├── ComponentName.module.css # Component styles (if using CSS modules)
├── ComponentName.test.tsx # Component tests
└── README.md        # Component documentation
```

## Best Practices

1. **Single Responsibility**: Each component should have one clear purpose
2. **Reusability**: Design components to be reusable when possible
3. **Props Interface**: Define clear TypeScript interfaces for props
4. **Default Props**: Provide sensible defaults for optional props
5. **Error Boundaries**: Use error boundaries for feature components
6. **Testing**: Write tests for complex components
7. **Documentation**: Document complex components with README files
8. **Consistent Naming**: Use consistent naming conventions across all components

## Import Guidelines

```typescript
// Import from specific directories
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { UserProfile } from '@/components/features/profile/UserProfile';

// Use index files for cleaner imports
import { Button, Input, Card } from '@/components/ui';
```
