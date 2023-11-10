export interface GuiMiscellaneousState {
    entries: {
        [key: string]: GuiMiscellaneousStateEntry
    }
}

export interface GuiMiscellaneousStateEntry {
    id?: string
    type: string
    name: string
    lightgroups: {
        [key: string]: GuiMiscellaneousStateEntryLightgroup
    }
    presets: {
        [key: string]: GuiMiscellaneousStateEntryPreset
    }
}

export interface GuiMiscellaneousStateEntryLightgroup {
    id?: string
    name: string
    indices: string
    checkIndex: number
    defaultPreset: string
}

export interface GuiMiscellaneousStateEntryPreset {
    id?: string
    name: string
    red: number | null
    blue: number | null
    green: number | null
    white: number | null
    group: string
    template: string
}
