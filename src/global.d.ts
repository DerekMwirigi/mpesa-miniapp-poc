export {};

declare global {
    interface Window {
        my?: {
            makePhoneCall: (options: { number: string }) => void;
            postMessage: (data: object) => void;
            onMessage?: (e: object) => void;
            getEnv: (callback: (res: { miniprogram: boolean }) => void) => void;
            alert: (options: { content: string }) => void;
            getLocation: (options: {
                success: (res: { latitude: number; longitude: number }) => void;
                fail: (err: object) => void;
            }) => void;
        };
    }
}