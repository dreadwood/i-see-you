import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface VideoState {
  isOpen: boolean
  videoUrl: string | null
}

interface VideoAction {
  openVideo: (p: string) => void
  closeVideo: () => void
}

const initialState: VideoState = {
  isOpen: false,
  videoUrl: null
}

export const useVideoStore = create<VideoState & VideoAction>()(
  devtools((set) => ({
    ...initialState,
    openVideo: (payload) =>
      set({
        isOpen: true,
        videoUrl: payload
      }),
    closeVideo: () => set(initialState)
  }))
)
