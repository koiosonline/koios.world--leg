export const environment = {
    isServer: typeof window === 'undefined',
    isClient: typeof window !== 'undefined',
};