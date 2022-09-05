const { element: { createElement: $92a85af3a50ac218$var$e  } , components: { BaseControl: $92a85af3a50ac218$var$BaseControl  } , compose: { withInstanceId: $92a85af3a50ac218$var$withInstanceId  } ,  } = window.wp;
const $92a85af3a50ac218$var$googleFonts = {
    "Abril Fatface": {
        weight: [
            "400"
        ]
    },
    Anton: {
        weight: [
            "400"
        ]
    },
    Arvo: {
        weight: [
            "400",
            "700"
        ]
    },
    Asap: {
        weight: [
            "400",
            "500",
            "600",
            "700"
        ]
    },
    "Barlow Condensed": {
        weight: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900", 
        ]
    },
    Barlow: {
        weight: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900", 
        ]
    },
    "Cormorant Garamond": {
        weight: [
            "300",
            "400",
            "500",
            "600",
            "700"
        ]
    },
    Faustina: {
        weight: [
            "400",
            "500",
            "600",
            "700"
        ]
    },
    "Fira Sans": {
        weight: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900", 
        ]
    },
    "IBM Plex Sans": {
        weight: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700"
        ]
    },
    Inconsolata: {
        weight: [
            "400",
            "700"
        ]
    },
    Heebo: {
        weight: [
            "100",
            "300",
            "400",
            "500",
            "700",
            "800",
            "900"
        ]
    },
    Karla: {
        weight: [
            "400",
            "700"
        ]
    },
    Lato: {
        weight: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900", 
        ]
    },
    Lora: {
        weight: [
            "400",
            "700"
        ]
    },
    Merriweather: {
        weight: [
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900"
        ]
    },
    Montserrat: {
        weight: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900", 
        ]
    },
    "Noto Sans": {
        weight: [
            "400",
            "700"
        ]
    },
    "Noto Serif": {
        weight: [
            "400",
            "700"
        ]
    },
    "Open Sans": {
        weight: [
            "300",
            "400",
            "500",
            "600",
            "700",
            "800"
        ]
    },
    Oswald: {
        weight: [
            "200",
            "300",
            "400",
            "500",
            "600",
            "700"
        ]
    },
    "Playfair Display": {
        weight: [
            "400",
            "700",
            "900"
        ]
    },
    "PT Serif": {
        weight: [
            "400",
            "700"
        ]
    },
    Roboto: {
        weight: [
            "100",
            "300",
            "400",
            "500",
            "700",
            "900"
        ]
    },
    Rubik: {
        weight: [
            "300",
            "400",
            "500",
            "700",
            "900"
        ]
    },
    Tajawal: {
        weight: [
            "200",
            "300",
            "400",
            "500",
            "700",
            "800",
            "900"
        ]
    },
    Ubuntu: {
        weight: [
            "300",
            "400",
            "500",
            "700"
        ]
    },
    Yrsa: {
        weight: [
            "300",
            "400",
            "500",
            "600",
            "700"
        ]
    },
    "Source Serif Pro": {
        weight: [
            "200",
            "300",
            "400",
            "600",
            "700",
            "900"
        ]
    },
    "Source Sans Pro": {
        weight: [
            "200",
            "300",
            "400",
            "600",
            "700",
            "900"
        ]
    },
    Martel: {
        weight: [
            "200",
            "300",
            "400",
            "600",
            "700",
            "800",
            "900"
        ]
    }
};
var $92a85af3a50ac218$export$2e2bcd8739ae039 = $92a85af3a50ac218$var$withInstanceId(({ label: label , value: value , help: help , instanceId: instanceId , onChange: onChange , className: className , ...props })=>{
    const id = `inspector-coblocks-font-family-${instanceId}`;
    const systemFonts = [
        {
            value: "Arial",
            label: "Arial"
        },
        {
            value: "",
            label: "Helvetica"
        },
        {
            value: "Times New Roman",
            label: "Times New Roman"
        },
        {
            value: "Georgia",
            label: "Georgia"
        }, 
    ];
    const fonts = [];
    function sortThings(a, b) {
        return a > b ? 1 : b > a ? -1 : 0;
    }
    // Add Google Fonts
    Object.keys($92a85af3a50ac218$var$googleFonts).sort(sortThings).map((k)=>{
        fonts.push({
            value: k,
            label: k
        });
    });
    const customFonts = [];
    if (document.fonts && document.fonts.forEach) document.fonts.forEach((font)=>{
        if ($92a85af3a50ac218$var$googleFonts[font.family]) return;
        if (font.family === "dashicons") return;
        if (customFonts.find(({ value: value  })=>value === font.family)) return;
        customFonts.push({
            value: font.family,
            label: font.family
        });
    });
    const onChangeValue = ({ target: { value: value  }  })=>{
        const googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
        const isSystemFont = systemFonts.filter(function(font) {
            return font.label === value;
        }).length > 0;
        let url = "";
        if (!isSystemFont) url = "https://fonts.googleapis.com/css?family=" + value.replace(/ /g, "+") + googleFontsAttr;
        onChange(value, url);
    };
    return $92a85af3a50ac218$var$e($92a85af3a50ac218$var$BaseControl, {
        label: label,
        id: id,
        help: help,
        className: className
    }, $92a85af3a50ac218$var$e("select", {
        className: "components-select-control__input components-select-control__input--coblocks-fontfamily",
        onChange: onChangeValue,
        "aria-describedby": help ? `${id}__help` : undefined,
        ...props
    }, customFonts.length > 0 && $92a85af3a50ac218$var$e("optgroup", {
        label: "Custom Loaded Fonts"
    }, customFonts.map((option, index)=>$92a85af3a50ac218$var$e("option", {
            key: option.value,
            value: option.value,
            selected: value === option.value
        }, option.label))), $92a85af3a50ac218$var$e("optgroup", {
        label: "System Fonts"
    }, systemFonts.map((option, index)=>$92a85af3a50ac218$var$e("option", {
            key: option.value,
            value: option.value,
            selected: value === option.value
        }, option.label))), $92a85af3a50ac218$var$e("optgroup", {
        label: "Google Fonts"
    }, fonts.map((option, index)=>$92a85af3a50ac218$var$e("option", {
            key: option.value,
            value: option.value,
            selected: value === option.value
        }, option.label)))));
});


const { i18n: { __: $38c3a2be9e61cffb$var$__  } , element: { createElement: $38c3a2be9e61cffb$var$e  } , components: { SelectControl: $38c3a2be9e61cffb$var$SelectControl  } ,  } = window.wp;
function $38c3a2be9e61cffb$export$2e2bcd8739ae039({ fontFamily: fontFamily , ...props }) {
    const options = [
        {
            value: "100",
            label: $38c3a2be9e61cffb$var$__("Thin", "slide")
        },
        {
            value: "200",
            label: $38c3a2be9e61cffb$var$__("Extra Light", "slide")
        },
        {
            value: "300",
            label: $38c3a2be9e61cffb$var$__("Light", "slide")
        },
        {
            value: "400",
            label: $38c3a2be9e61cffb$var$__("Normal", "slide")
        },
        {
            value: "500",
            label: $38c3a2be9e61cffb$var$__("Medium", "slide")
        },
        {
            value: "600",
            label: $38c3a2be9e61cffb$var$__("Semi Bold", "slide")
        },
        {
            value: "700",
            label: $38c3a2be9e61cffb$var$__("Bold", "slide")
        },
        {
            value: "800",
            label: $38c3a2be9e61cffb$var$__("Extra Bold", "slide")
        },
        {
            value: "900",
            label: $38c3a2be9e61cffb$var$__("Black", "slide")
        }, 
    ];
    const weights = new Set();
    if (document.fonts && document.fonts.forEach) document.fonts.forEach((font)=>{
        if (font.family !== fontFamily) return;
        weights.add(font.weight);
    });
    if (weights.size) options.forEach((option)=>{
        if (weights.has(option.value)) return;
        option.disabled = true;
    });
    return $38c3a2be9e61cffb$var$e($38c3a2be9e61cffb$var$SelectControl, {
        ...props,
        options: options
    });
}


const { hooks: { addFilter: $8a9ca0e8dce9946c$var$addFilter  } , element: { createElement: $8a9ca0e8dce9946c$var$e , Fragment: $8a9ca0e8dce9946c$var$f  } , blockEditor: { InspectorControls: $8a9ca0e8dce9946c$var$InspectorControls  } , components: { PanelBody: $8a9ca0e8dce9946c$var$PanelBody  } , i18n: { __: $8a9ca0e8dce9946c$var$__  } ,  } = window.wp;
const $8a9ca0e8dce9946c$var$allowedBlocks = new Set([
    "core/paragraph"
]);
$8a9ca0e8dce9946c$var$addFilter("blocks.registerBlockType", "slide/register-block-attributes", (settings)=>{
    if (!$8a9ca0e8dce9946c$var$allowedBlocks.has(settings.name)) return settings;
    return {
        ...settings,
        attributes: {
            ...settings.attributes,
            fontFamily: {
                type: "string"
            },
            fontWeight: {
                type: "string"
            }
        }
    };
});
$8a9ca0e8dce9946c$var$addFilter("editor.BlockEdit", "slide/control-block-attributes", (BlockEdit)=>{
    return (props)=>{
        const { attributes: attributes , setAttributes: setAttributes , isSelected: isSelected , name: name  } = props;
        return $8a9ca0e8dce9946c$var$e($8a9ca0e8dce9946c$var$f, null, $8a9ca0e8dce9946c$var$e(BlockEdit, props), isSelected && $8a9ca0e8dce9946c$var$allowedBlocks.has(name) && $8a9ca0e8dce9946c$var$e($8a9ca0e8dce9946c$var$InspectorControls, null, $8a9ca0e8dce9946c$var$e($8a9ca0e8dce9946c$var$PanelBody, {
            title: $8a9ca0e8dce9946c$var$__("Font", "slide"),
            icon: "format-text",
            initialOpen: false
        }, $8a9ca0e8dce9946c$var$e((0, $92a85af3a50ac218$export$2e2bcd8739ae039), {
            label: $8a9ca0e8dce9946c$var$__("Font Family", "slide"),
            value: attributes.fontFamily,
            onChange: (fontFamily)=>setAttributes({
                    fontFamily: fontFamily
                })
        }), $8a9ca0e8dce9946c$var$e((0, $38c3a2be9e61cffb$export$2e2bcd8739ae039), {
            label: $8a9ca0e8dce9946c$var$__("Font Weight", "slide"),
            value: attributes.fontWeight || "400",
            onChange: (fontWeight)=>setAttributes({
                    fontWeight: fontWeight
                }),
            fontFamily: attributes.fontFamily
        }))));
    };
});
$8a9ca0e8dce9946c$var$addFilter("editor.BlockListBlock", "slide/edit-block-attributes", (BlockListBlock)=>{
    return (props)=>{
        if ($8a9ca0e8dce9946c$var$allowedBlocks.has(props.block.name)) {
            const { wrapperProps: wrapperProps = {} , attributes: attributes  } = props;
            const { style: style = {}  } = wrapperProps;
            const { fontFamily: fontFamily , fontWeight: fontWeight  } = attributes;
            if (fontFamily) props = {
                ...props,
                wrapperProps: {
                    ...wrapperProps,
                    style: {
                        ...style,
                        fontFamily: fontFamily,
                        fontWeight: fontWeight
                    }
                }
            };
        }
        return $8a9ca0e8dce9946c$var$e(BlockListBlock, props);
    };
});
$8a9ca0e8dce9946c$var$addFilter("blocks.getSaveContent.extraProps", "slide/save-block-attributes", (extraProps, blockType, attributes)=>{
    if (!$8a9ca0e8dce9946c$var$allowedBlocks.has(blockType.name)) return extraProps;
    const { fontFamily: fontFamily , fontWeight: fontWeight  } = attributes;
    const { style: style = {}  } = extraProps;
    return {
        ...extraProps,
        style: {
            ...style,
            fontFamily: fontFamily,
            fontWeight: fontWeight
        }
    };
});


window.addEventListener("DOMContentLoaded", $eecad0e759b8da8f$var$resize);
function $eecad0e759b8da8f$var$resize() {
    const element = document.querySelector(".block-editor-writing-flow");
    if (!element) {
        window.requestAnimationFrame($eecad0e759b8da8f$var$resize);
        return;
    }
    const width = element.clientWidth;
    const parentWidth = element.parentNode.clientWidth;
    const margin = parentWidth / 26;
    const innerParentWidth = element.parentNode.clientWidth - margin * 2;
    const scale = Math.min(1, innerParentWidth / width);
    const marginLeft = scale === 1 ? (innerParentWidth - width) / 2 + margin : margin;
    const transform = `translate(${marginLeft}px, ${margin}px) scale(${scale})`;
    if (element.style.transform !== transform) {
        element.style.transformOrigin = "0 0";
        element.style.transform = transform;
    }
    window.requestAnimationFrame($eecad0e759b8da8f$var$resize);
}


const { blocks: { createBlock: $a7e75b2151b85107$var$createBlock  } , data: { subscribe: $a7e75b2151b85107$var$subscribe , select: $a7e75b2151b85107$var$select , dispatch: $a7e75b2151b85107$var$dispatch  } ,  } = window.wp;
$a7e75b2151b85107$var$subscribe(()=>{
    const blocks = $a7e75b2151b85107$var$select("core/block-editor").getBlocks();
    const block = blocks.find(({ name: name  })=>name !== "slide/slide");
    if (!block) return;
    const slide = $a7e75b2151b85107$var$createBlock("slide/slide", {}, [
        block.name === "core/paragraph" ? $a7e75b2151b85107$var$createBlock("core/heading") : $a7e75b2151b85107$var$createBlock(block.name, block.attributes), 
    ]);
    $a7e75b2151b85107$var$dispatch("core/block-editor").replaceBlock(block.clientId, slide);
});


const { i18n: { __: $66e30999ccdcacc1$var$__  } , element: { createElement: $66e30999ccdcacc1$var$e  } , richText: { registerFormatType: $66e30999ccdcacc1$var$registerFormatType , toggleFormat: $66e30999ccdcacc1$var$toggleFormat  } , blockEditor: { RichTextToolbarButton: $66e30999ccdcacc1$var$RichTextToolbarButton  } ,  } = window.wp;
$66e30999ccdcacc1$var$registerFormatType("slide/fragment", {
    title: $66e30999ccdcacc1$var$__("Slide Fragment", "slide"),
    tagName: "span",
    className: "fragment",
    edit: ({ value: value , onChange: onChange  })=>$66e30999ccdcacc1$var$e($66e30999ccdcacc1$var$RichTextToolbarButton, {
            icon: "editor-textcolor",
            title: $66e30999ccdcacc1$var$__("Slide Fragment", "slide"),
            onClick: ()=>{
                onChange($66e30999ccdcacc1$var$toggleFormat(value, {
                    type: "slide/fragment"
                }));
            }
        })
});


const { element: { createElement: $a2e6c3553b124b9b$var$e , useRef: $a2e6c3553b124b9b$var$useRef , useEffect: $a2e6c3553b124b9b$var$useEffect , memo: $a2e6c3553b124b9b$var$memo  } , codeEditor: { initialize: $a2e6c3553b124b9b$var$initialize , defaultSettings: $a2e6c3553b124b9b$var$defaultSettings  } ,  } = window.wp;
var $a2e6c3553b124b9b$export$2e2bcd8739ae039 = $a2e6c3553b124b9b$var$memo(({ onChange: onChange , mode: mode , ...props })=>{
    const ref = $a2e6c3553b124b9b$var$useRef();
    $a2e6c3553b124b9b$var$useEffect(()=>{
        const editor = $a2e6c3553b124b9b$var$initialize(ref.current, {
            ...$a2e6c3553b124b9b$var$defaultSettings,
            codemirror: {
                ...$a2e6c3553b124b9b$var$defaultSettings.codemirror,
                tabSize: 2,
                mode: mode,
                lineNumbers: false
            }
        });
        editor.codemirror.on("change", ()=>{
            onChange(editor.codemirror.getValue());
        });
        return ()=>{
            editor.codemirror.toTextArea();
        };
    });
    return $a2e6c3553b124b9b$var$e("textarea", {
        ref: ref,
        ...props
    });
// Never rerender.
}, ()=>true);


const { i18n: { __: $6aba998320558280$var$__  } , blocks: { registerBlockType: $6aba998320558280$var$registerBlockType  } , element: { createElement: $6aba998320558280$var$e , Fragment: $6aba998320558280$var$Fragment  } , data: { useSelect: $6aba998320558280$var$useSelect  } , components: { TextareaControl: $6aba998320558280$var$TextareaControl , PanelBody: $6aba998320558280$var$PanelBody , RangeControl: $6aba998320558280$var$RangeControl , ToggleControl: $6aba998320558280$var$ToggleControl , Button: $6aba998320558280$var$Button , FocalPointPicker: $6aba998320558280$var$FocalPointPicker , Notice: $6aba998320558280$var$Notice , TextControl: $6aba998320558280$var$TextControl , RadioControl: $6aba998320558280$var$RadioControl ,  } , blockEditor: { MediaUpload: $6aba998320558280$var$MediaUpload , InnerBlocks: $6aba998320558280$var$InnerBlocks , InspectorControls: $6aba998320558280$var$InspectorControls , ColorPalette: $6aba998320558280$var$ColorPalette  } ,  } = window.wp;
const $6aba998320558280$var$ALLOWED_MEDIA_TYPES = [
    "image"
];
const $6aba998320558280$var$backgroundUrlKey = "presentation-background-url";
$6aba998320558280$var$registerBlockType("slide/slide", {
    title: $6aba998320558280$var$__("Presentation Block", "slide"),
    description: $6aba998320558280$var$__("With this blocks you can form your slide deck! You can override document level setting for each slide block."),
    icon: "slides",
    category: "common",
    keywords: [
        $6aba998320558280$var$__("Presentation", "slide")
    ],
    attributes: {
        notes: {
            type: "string"
        },
        color: {
            type: "string"
        },
        backgroundColor: {
            type: "string"
        },
        backgroundId: {
            type: "string"
        },
        backgroundUrl: {
            type: "string"
        },
        focalPoint: {
            type: "object"
        },
        backgroundOpacity: {
            type: "string"
        },
        backgroundSize: {
            type: "string"
        },
        hidden: {
            type: "boolean"
        },
        backgroundIframeUrl: {
            type: "string"
        },
        backgroundSvg: {
            type: "string"
        }
    },
    edit: ({ attributes: attributes , setAttributes: setAttributes , className: className  })=>{
        const meta = $6aba998320558280$var$useSelect((select)=>select("core/editor").getEditedPostAttribute("meta"));
        return $6aba998320558280$var$e($6aba998320558280$var$Fragment, null, $6aba998320558280$var$e($6aba998320558280$var$InspectorControls, null, $6aba998320558280$var$e($6aba998320558280$var$PanelBody, {
            title: $6aba998320558280$var$__("Speaker Notes", "slide"),
            icon: "edit",
            initialOpen: false
        }, $6aba998320558280$var$e($6aba998320558280$var$TextareaControl, {
            label: $6aba998320558280$var$__("Anything you want to remember.", "slide"),
            value: attributes.notes,
            onChange: (notes)=>setAttributes({
                    notes: notes
                }),
            rows: 10
        })), $6aba998320558280$var$e($6aba998320558280$var$PanelBody, {
            title: $6aba998320558280$var$__("Font", "slide"),
            icon: "text",
            initialOpen: false
        }, $6aba998320558280$var$e($6aba998320558280$var$ColorPalette, {
            label: $6aba998320558280$var$__("Color", "slide"),
            value: attributes.color,
            onChange: (color)=>setAttributes({
                    color: color
                })
        }), !!attributes.color && $6aba998320558280$var$e($6aba998320558280$var$Button, {
            isDefault: true,
            onClick: ()=>{
                setAttributes({
                    color: undefined
                });
            }
        }, $6aba998320558280$var$__("Remove"))), $6aba998320558280$var$e($6aba998320558280$var$PanelBody, {
            title: $6aba998320558280$var$__("Background Color", "slide"),
            icon: "art",
            initialOpen: false
        }, $6aba998320558280$var$e($6aba998320558280$var$ColorPalette, {
            label: $6aba998320558280$var$__("Background Color", "slide"),
            value: attributes.backgroundColor,
            onChange: (backgroundColor)=>setAttributes({
                    backgroundColor: backgroundColor
                })
        }), (attributes.backgroundUrl || meta[$6aba998320558280$var$backgroundUrlKey]) && $6aba998320558280$var$e($6aba998320558280$var$RangeControl, {
            label: $6aba998320558280$var$__("Opacity", "slide"),
            value: attributes.backgroundOpacity ? 100 - parseInt(attributes.backgroundOpacity, 10) : undefined,
            min: 0,
            max: 100,
            initialPosition: 0,
            onChange: (value)=>{
                if (value === undefined) setAttributes({
                    backgroundOpacity: undefined
                });
                else setAttributes({
                    backgroundOpacity: 100 - value + ""
                });
            }
        }), !!attributes.backgroundColor && $6aba998320558280$var$e($6aba998320558280$var$Button, {
            isDefault: true,
            onClick: ()=>{
                setAttributes({
                    backgroundColor: undefined
                });
            }
        }, $6aba998320558280$var$__("Remove"))), $6aba998320558280$var$e($6aba998320558280$var$PanelBody, {
            title: $6aba998320558280$var$__("Background Image", "slide"),
            icon: "format-image",
            initialOpen: false
        }, $6aba998320558280$var$e($6aba998320558280$var$MediaUpload, {
            onSelect: (media)=>{
                if (!media || !media.url) {
                    setAttributes({
                        backgroundUrl: undefined,
                        backgroundId: undefined,
                        backgroundSize: undefined,
                        focalPoint: undefined
                    });
                    return;
                }
                setAttributes({
                    backgroundUrl: media.url,
                    backgroundId: media.id
                });
            },
            allowedTypes: $6aba998320558280$var$ALLOWED_MEDIA_TYPES,
            value: attributes.backgroundId,
            render: ({ open: open  })=>$6aba998320558280$var$e($6aba998320558280$var$Button, {
                    isDefault: true,
                    onClick: open
                }, attributes.backgroundUrl ? $6aba998320558280$var$__("Change") : $6aba998320558280$var$__("Add Background Image"))
        }), " ", !!attributes.backgroundUrl && $6aba998320558280$var$e($6aba998320558280$var$Button, {
            isDefault: true,
            onClick: ()=>{
                setAttributes({
                    backgroundUrl: undefined,
                    backgroundId: undefined,
                    backgroundSize: undefined,
                    focalPoint: undefined
                });
            }
        }, $6aba998320558280$var$__("Remove")), $6aba998320558280$var$e("br"), $6aba998320558280$var$e("br"), !!attributes.backgroundUrl && $6aba998320558280$var$e($6aba998320558280$var$FocalPointPicker, {
            label: $6aba998320558280$var$__("Focal Point Picker"),
            url: attributes.backgroundUrl,
            value: attributes.focalPoint,
            onChange: (focalPoint)=>setAttributes({
                    focalPoint: focalPoint
                })
        }), !!attributes.backgroundUrl && $6aba998320558280$var$e($6aba998320558280$var$RangeControl, {
            label: $6aba998320558280$var$__("Opacity", "slide"),
            value: attributes.backgroundOpacity ? parseInt(attributes.backgroundOpacity, 10) : undefined,
            min: 0,
            max: 100,
            initialPosition: 100,
            onChange: (value)=>setAttributes({
                    backgroundOpacity: value + ""
                })
        }), !!attributes.backgroundUrl && $6aba998320558280$var$e($6aba998320558280$var$RadioControl, {
            label: $6aba998320558280$var$__("Size", "slide"),
            selected: attributes.backgroundSize,
            options: [
                {
                    label: $6aba998320558280$var$__("Cover"),
                    value: "cover"
                },
                {
                    label: $6aba998320558280$var$__("Contain"),
                    value: "contain"
                }, 
            ],
            onChange: (backgroundSize)=>setAttributes({
                    backgroundSize: backgroundSize
                })
        })), $6aba998320558280$var$e($6aba998320558280$var$PanelBody, {
            title: $6aba998320558280$var$__("Background Iframe", "slide"),
            icon: "format-video",
            initialOpen: false
        }, $6aba998320558280$var$e($6aba998320558280$var$TextControl, {
            label: $6aba998320558280$var$__("Iframe URL"),
            value: attributes.backgroundIframeUrl,
            onChange: (backgroundIframeUrl)=>setAttributes({
                    backgroundIframeUrl: backgroundIframeUrl
                })
        }), $6aba998320558280$var$e("br"), $6aba998320558280$var$e("br"), !!attributes.backgroundIframeUrl && $6aba998320558280$var$e($6aba998320558280$var$RangeControl, {
            label: $6aba998320558280$var$__("Opacity", "slide"),
            value: attributes.backgroundOpacity ? parseInt(attributes.backgroundOpacity, 10) : undefined,
            min: 0,
            max: 100,
            initialPosition: 100,
            onChange: (value)=>setAttributes({
                    backgroundOpacity: value + ""
                })
        })), $6aba998320558280$var$e($6aba998320558280$var$PanelBody, {
            title: $6aba998320558280$var$__("Background SVG", "slide"),
            icon: "format-video",
            initialOpen: false
        }, $6aba998320558280$var$e((0, $a2e6c3553b124b9b$export$2e2bcd8739ae039), {
            mode: "htmlmixed",
            value: attributes.backgroundSvg,
            onChange: (backgroundSvg)=>setAttributes({
                    backgroundSvg: backgroundSvg
                })
        }), $6aba998320558280$var$e("br"), $6aba998320558280$var$e("br"), !!attributes.backgroundSvg && $6aba998320558280$var$e($6aba998320558280$var$RangeControl, {
            label: $6aba998320558280$var$__("Opacity", "slide"),
            value: attributes.backgroundOpacity ? parseInt(attributes.backgroundOpacity, 10) : undefined,
            min: 0,
            max: 100,
            initialPosition: 100,
            onChange: (value)=>setAttributes({
                    backgroundOpacity: value + ""
                })
        })), $6aba998320558280$var$e($6aba998320558280$var$PanelBody, {
            title: $6aba998320558280$var$__("Visibility", "slide"),
            icon: "visibility",
            initialOpen: false
        }, $6aba998320558280$var$e($6aba998320558280$var$ToggleControl, {
            label: $6aba998320558280$var$__("Hide Slide", "slide"),
            checked: attributes.hidden,
            onChange: (hidden)=>setAttributes({
                    hidden: hidden
                })
        }))), attributes.hidden && $6aba998320558280$var$e($6aba998320558280$var$Notice, {
            status: "warning",
            isDismissible: false
        }, "This slide is hidden"), $6aba998320558280$var$e("div", {
            className: "wp-block-slide-slide__body",
            style: {
                color: attributes.color || undefined,
                backgroundColor: attributes.backgroundColor || undefined,
                // If a background color is set, disable the global gradient.
                backgroundImage: attributes.backgroundColor ? "none" : undefined
            }
        }, $6aba998320558280$var$e("div", {
            className: "wp-block-slide-slide__background",
            style: {
                backgroundImage: attributes.backgroundUrl ? `url("${attributes.backgroundUrl}")` : undefined,
                backgroundPosition: attributes.focalPoint ? `${attributes.focalPoint.x * 100}% ${attributes.focalPoint.y * 100}%` : undefined,
                backgroundSize: attributes.backgroundSize ? attributes.backgroundSize : undefined,
                opacity: attributes.backgroundOpacity ? attributes.backgroundOpacity / 100 : undefined
            }
        }, !!attributes.backgroundIframeUrl && $6aba998320558280$var$e("iframe", {
            src: attributes.backgroundIframeUrl
        }), !!attributes.backgroundSvg && $6aba998320558280$var$e("div", {
            dangerouslySetInnerHTML: {
                __html: attributes.backgroundSvg
            }
        })), $6aba998320558280$var$e("section", {
            className: className
        }, $6aba998320558280$var$e($6aba998320558280$var$InnerBlocks, {
            templateInsertUpdatesSelection: true,
            template: [
                [
                    "core/paragraph"
                ]
            ],
            templateLock: false
        }))), $6aba998320558280$var$e($6aba998320558280$var$TextareaControl, {
            label: $6aba998320558280$var$__("Speaker notes", "slide"),
            value: attributes.notes,
            onChange: (notes)=>setAttributes({
                    notes: notes
                }),
            rows: 5
        }));
    },
    save: ({ attributes: attributes  })=>$6aba998320558280$var$e(attributes.hidden ? "div" : "section", {
            style: {
                color: attributes.color || undefined,
                display: attributes.hidden ? "none" : undefined
            },
            "data-background-color": attributes.backgroundColor || undefined,
            "data-background-image": attributes.backgroundUrl ? attributes.backgroundUrl : undefined,
            "data-background-position": attributes.focalPoint ? `${attributes.focalPoint.x * 100}% ${attributes.focalPoint.y * 100}%` : undefined,
            "data-background-opacity": attributes.backgroundOpacity ? attributes.backgroundOpacity / 100 : undefined,
            "data-background-iframe": attributes.backgroundIframeUrl ? attributes.backgroundIframeUrl : undefined,
            "data-background-size": attributes.backgroundSize ? attributes.backgroundSize : undefined,
            "data-background-svg": attributes.backgroundSvg ? attributes.backgroundSvg : undefined
        }, $6aba998320558280$var$e($6aba998320558280$var$InnerBlocks.Content))
});





const { i18n: { __: $09c8b9c8d5e2e67c$var$__  } , element: { createElement: $09c8b9c8d5e2e67c$var$e , useEffect: $09c8b9c8d5e2e67c$var$useEffect  } , plugins: { registerPlugin: $09c8b9c8d5e2e67c$var$registerPlugin  } , editPost: { PluginDocumentSettingPanel: $09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel  } , data: { useSelect: $09c8b9c8d5e2e67c$var$useSelect , useDispatch: $09c8b9c8d5e2e67c$var$useDispatch  } , components: { TextareaControl: $09c8b9c8d5e2e67c$var$TextareaControl , RangeControl: $09c8b9c8d5e2e67c$var$RangeControl , SelectControl: $09c8b9c8d5e2e67c$var$SelectControl , ToggleControl: $09c8b9c8d5e2e67c$var$ToggleControl , Button: $09c8b9c8d5e2e67c$var$Button , FocalPointPicker: $09c8b9c8d5e2e67c$var$FocalPointPicker , ExternalLink: $09c8b9c8d5e2e67c$var$ExternalLink , TextControl: $09c8b9c8d5e2e67c$var$TextControl , RadioControl: $09c8b9c8d5e2e67c$var$RadioControl , CheckboxControl: $09c8b9c8d5e2e67c$var$CheckboxControl ,  } , blockEditor: { MediaUpload: $09c8b9c8d5e2e67c$var$MediaUpload , __experimentalGradientPickerControl: $09c8b9c8d5e2e67c$var$__experimentalGradientPickerControl , ColorPalette: $09c8b9c8d5e2e67c$var$ColorPalette ,  } , url: { addQueryArgs: $09c8b9c8d5e2e67c$var$addQueryArgs  } ,  } = window.wp;
const $09c8b9c8d5e2e67c$var$colorKey = "presentation-color";
const $09c8b9c8d5e2e67c$var$bgColorKey = "presentation-background-color";
const $09c8b9c8d5e2e67c$var$backgroundGradientKey = "presentation-background-gradient";
const $09c8b9c8d5e2e67c$var$backgroundUrlKey = "presentation-background-url";
const $09c8b9c8d5e2e67c$var$backgroundIdKey = "presentation-background-id";
const $09c8b9c8d5e2e67c$var$backgroundPositionKey = "presentation-background-position";
const $09c8b9c8d5e2e67c$var$backgroundOpacityKey = "presentation-background-opacity";
const $09c8b9c8d5e2e67c$var$cssKey = "presentation-css";
const $09c8b9c8d5e2e67c$var$fontSizeKey = "presentation-font-size";
const $09c8b9c8d5e2e67c$var$fontFamilyKey = "presentation-font-family";
const $09c8b9c8d5e2e67c$var$fontFamilyUrlKey = "presentation-font-family-url";
const $09c8b9c8d5e2e67c$var$fontFamilyHeadingKey = "presentation-font-family-heading";
const $09c8b9c8d5e2e67c$var$fontFamilyHeadingUrlKey = "presentation-font-family-heading-url";
const $09c8b9c8d5e2e67c$var$fontWeightHeadingKey = "presentation-font-weight-heading";
const $09c8b9c8d5e2e67c$var$transitionKey = "presentation-transition";
const $09c8b9c8d5e2e67c$var$backgroundTransitionKey = "presentation-background-transition";
const $09c8b9c8d5e2e67c$var$transitionSpeedKey = "presentation-transition-speed";
const $09c8b9c8d5e2e67c$var$controlsKey = "presentation-controls";
const $09c8b9c8d5e2e67c$var$progressKey = "presentation-progress";
const $09c8b9c8d5e2e67c$var$widthKey = "presentation-width";
const $09c8b9c8d5e2e67c$var$horizontalPaddingKey = "presentation-horizontal-padding";
const $09c8b9c8d5e2e67c$var$verticalPaddingKey = "presentation-vertical-padding";
const $09c8b9c8d5e2e67c$var$colorPaletteKey = "presentation-color-palette";
const $09c8b9c8d5e2e67c$var$containKey = "presentation-contain";
const $09c8b9c8d5e2e67c$var$ALLOWED_MEDIA_TYPES = [
    "image"
];
$09c8b9c8d5e2e67c$var$registerPlugin("slide", {
    render: ()=>{
        const meta = $09c8b9c8d5e2e67c$var$useSelect((select)=>select("core/editor").getEditedPostAttribute("meta"));
        if (meta["presentation-controls"] === "") meta["presentation-controls"] = "true";
        const link = $09c8b9c8d5e2e67c$var$useSelect((select)=>select("core/editor").getCurrentPost("meta").link);
        const { editPost: editPost  } = $09c8b9c8d5e2e67c$var$useDispatch("core/editor");
        const updateMeta = (value, key)=>editPost({
                meta: {
                    ...meta,
                    [key]: value
                }
            });
        const bodyRules = {
            "background-color": meta[$09c8b9c8d5e2e67c$var$bgColorKey] || "#fff",
            "background-image": meta[$09c8b9c8d5e2e67c$var$backgroundGradientKey] || "none",
            color: meta[$09c8b9c8d5e2e67c$var$colorKey] || "#000",
            "font-size": (meta[$09c8b9c8d5e2e67c$var$fontSizeKey] || "42") + "px",
            "font-family": meta[$09c8b9c8d5e2e67c$var$fontFamilyKey] || "Helvetica, sans-serif"
        };
        const rules = {
            width: meta[$09c8b9c8d5e2e67c$var$widthKey] ? meta[$09c8b9c8d5e2e67c$var$widthKey] + "px !important" : undefined,
            "padding-top": meta[$09c8b9c8d5e2e67c$var$verticalPaddingKey] ? meta[$09c8b9c8d5e2e67c$var$verticalPaddingKey] : "0.2em",
            "padding-bottom": meta[$09c8b9c8d5e2e67c$var$verticalPaddingKey] ? meta[$09c8b9c8d5e2e67c$var$verticalPaddingKey] : "0.2em",
            "padding-left": meta[$09c8b9c8d5e2e67c$var$horizontalPaddingKey] ? meta[$09c8b9c8d5e2e67c$var$horizontalPaddingKey] : "0.2em",
            "padding-right": meta[$09c8b9c8d5e2e67c$var$horizontalPaddingKey] ? meta[$09c8b9c8d5e2e67c$var$horizontalPaddingKey] : "0.2em"
        };
        let width = parseInt(meta[$09c8b9c8d5e2e67c$var$widthKey] || "960", 10) + 30;
        if (meta[$09c8b9c8d5e2e67c$var$containKey] === "true") {
            rules.width = "auto !important";
            rules.height = "auto !important";
            bodyRules.width = meta[$09c8b9c8d5e2e67c$var$widthKey] ? meta[$09c8b9c8d5e2e67c$var$widthKey] + "px !important" : "960px !important";
            bodyRules.height = "720px !important";
        } else width += 100;
        $09c8b9c8d5e2e67c$var$useEffect(()=>{
            if (meta[$09c8b9c8d5e2e67c$var$containKey] === "true") document.documentElement.classList.add("presentation-contain");
            else document.documentElement.classList.remove("presentation-contain");
        });
        const backgroundRules = {
            "background-image": meta[$09c8b9c8d5e2e67c$var$backgroundUrlKey] ? `url("${meta[$09c8b9c8d5e2e67c$var$backgroundUrlKey]}")` : "none",
            "background-size": "cover",
            "background-position": meta[$09c8b9c8d5e2e67c$var$backgroundPositionKey] ? meta[$09c8b9c8d5e2e67c$var$backgroundPositionKey] : "50% 50%",
            opacity: meta[$09c8b9c8d5e2e67c$var$backgroundOpacityKey] ? meta[$09c8b9c8d5e2e67c$var$backgroundOpacityKey] / 100 : 1
        };
        return [
            ...Object.keys(bodyRules).map((key)=>{
                return $09c8b9c8d5e2e67c$var$e("style", null, `.wp-block-slide-slide__body {${key}:${bodyRules[key]}}`);
            }),
            ...Object.keys(rules).map((key)=>{
                return $09c8b9c8d5e2e67c$var$e("style", null, `.wp-block-slide-slide {${key}:${rules[key]}}`);
            }),
            ...Object.keys(backgroundRules).map((key)=>{
                return $09c8b9c8d5e2e67c$var$e("style", null, `.wp-block-slide-slide__background {${key}:${backgroundRules[key]}}`);
            }),
            $09c8b9c8d5e2e67c$var$e("style", null, meta[$09c8b9c8d5e2e67c$var$cssKey]),
            !!meta[$09c8b9c8d5e2e67c$var$fontFamilyUrlKey] && $09c8b9c8d5e2e67c$var$e("style", null, `@import url("${meta[$09c8b9c8d5e2e67c$var$fontFamilyUrlKey]}")`),
            !!meta[$09c8b9c8d5e2e67c$var$fontFamilyHeadingKey] && $09c8b9c8d5e2e67c$var$e("style", null, (meta[$09c8b9c8d5e2e67c$var$fontFamilyHeadingUrlKey] ? `@import url("${meta[$09c8b9c8d5e2e67c$var$fontFamilyHeadingUrlKey]}");` : "") + `.wp-block-slide-slide h1, .wp-block-slide-slide h2, .wp-block-slide-slide h3, .wp-block-slide-slide h4, .wp-block-slide-slide h5, .wp-block-slide-slide h6 { font-family: ${meta[$09c8b9c8d5e2e67c$var$fontFamilyHeadingKey]} }`),
            !!meta[$09c8b9c8d5e2e67c$var$fontWeightHeadingKey] && $09c8b9c8d5e2e67c$var$e("style", null, `.wp-block-slide-slide h1, .wp-block-slide-slide h2, .wp-block-slide-slide h3, .wp-block-slide-slide h4, .wp-block-slide-slide h5, .wp-block-slide-slide h6 { font-weight: ${meta[$09c8b9c8d5e2e67c$var$fontWeightHeadingKey]} }`),
            $09c8b9c8d5e2e67c$var$e("style", null, `.editor-styles-wrapper .editor-writing-flow { width: ${width}px !important; }`),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-dimensions",
                title: $09c8b9c8d5e2e67c$var$__("Setup", "slide"),
                icon: "editor-expand"
            }, $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$RadioControl, {
                selected: meta[$09c8b9c8d5e2e67c$var$widthKey] === "1280" ? "16:9" : "",
                options: [
                    {
                        label: $09c8b9c8d5e2e67c$var$__("Standard 4:3"),
                        value: ""
                    },
                    {
                        label: $09c8b9c8d5e2e67c$var$__("Widescreen 16:9"),
                        value: "16:9"
                    }, 
                ],
                onChange: (value)=>{
                    editPost({
                        meta: {
                            [$09c8b9c8d5e2e67c$var$widthKey]: value === "16:9" ? "1280" : ""
                        }
                    });
                }
            }), $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$CheckboxControl, {
                label: $09c8b9c8d5e2e67c$var$__("Contain view to dimensions", "slide"),
                help: $09c8b9c8d5e2e67c$var$__("This can be useful if positions from background and full width blocks must be preserved.", "slide"),
                checked: meta[$09c8b9c8d5e2e67c$var$containKey] === "true",
                onChange: (value)=>{
                    editPost({
                        meta: {
                            [$09c8b9c8d5e2e67c$var$containKey]: value + ""
                        }
                    });
                }
            }), $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$TextControl, {
                label: $09c8b9c8d5e2e67c$var$__("Horizontal Padding"),
                placeholder: "0.2em",
                value: meta[$09c8b9c8d5e2e67c$var$horizontalPaddingKey],
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$horizontalPaddingKey)
            }), $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$TextControl, {
                label: $09c8b9c8d5e2e67c$var$__("Vertical Padding"),
                placeholder: "0.2em",
                value: meta[$09c8b9c8d5e2e67c$var$verticalPaddingKey],
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$verticalPaddingKey)
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-font",
                title: $09c8b9c8d5e2e67c$var$__("Base Font", "slide"),
                icon: "text"
            }, $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$RangeControl, {
                label: $09c8b9c8d5e2e67c$var$__("Font Size", "slide"),
                value: meta[$09c8b9c8d5e2e67c$var$fontSizeKey] ? parseInt(meta[$09c8b9c8d5e2e67c$var$fontSizeKey], 10) : undefined,
                min: 10,
                max: 100,
                initialPosition: 42,
                onChange: (value)=>updateMeta(value + "", $09c8b9c8d5e2e67c$var$fontSizeKey)
            }), $09c8b9c8d5e2e67c$var$e((0, $92a85af3a50ac218$export$2e2bcd8739ae039), {
                label: $09c8b9c8d5e2e67c$var$__("Font Family", "slide"),
                value: meta[$09c8b9c8d5e2e67c$var$fontFamilyKey],
                onChange: (value, fontUrl)=>{
                    editPost({
                        meta: {
                            [$09c8b9c8d5e2e67c$var$fontFamilyKey]: value,
                            [$09c8b9c8d5e2e67c$var$fontFamilyUrlKey]: fontUrl
                        }
                    });
                }
            }), $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$ColorPalette, {
                label: $09c8b9c8d5e2e67c$var$__("Color", "slide"),
                value: meta[$09c8b9c8d5e2e67c$var$colorKey],
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$colorKey)
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-heading-font",
                title: $09c8b9c8d5e2e67c$var$__("Heading Font", "slide"),
                icon: "text"
            }, $09c8b9c8d5e2e67c$var$e((0, $92a85af3a50ac218$export$2e2bcd8739ae039), {
                label: $09c8b9c8d5e2e67c$var$__("Font Family", "slide"),
                value: meta[$09c8b9c8d5e2e67c$var$fontFamilyHeadingKey],
                onChange: (value, fontUrl)=>{
                    editPost({
                        meta: {
                            [$09c8b9c8d5e2e67c$var$fontFamilyHeadingKey]: value,
                            [$09c8b9c8d5e2e67c$var$fontFamilyHeadingUrlKey]: fontUrl
                        }
                    });
                }
            }), $09c8b9c8d5e2e67c$var$e((0, $38c3a2be9e61cffb$export$2e2bcd8739ae039), {
                label: $09c8b9c8d5e2e67c$var$__("Font Weight", "slide"),
                value: meta[$09c8b9c8d5e2e67c$var$fontWeightHeadingKey] || "400",
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$fontWeightHeadingKey),
                fontFamily: meta[$09c8b9c8d5e2e67c$var$fontFamilyHeadingKey]
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-background",
                title: $09c8b9c8d5e2e67c$var$__("Background", "slide"),
                icon: "art"
            }, $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$ColorPalette, {
                label: $09c8b9c8d5e2e67c$var$__("Background Color", "slide"),
                value: meta[$09c8b9c8d5e2e67c$var$bgColorKey],
                onChange: (value)=>{
                    editPost({
                        meta: {
                            ...meta,
                            [$09c8b9c8d5e2e67c$var$bgColorKey]: value,
                            [$09c8b9c8d5e2e67c$var$backgroundGradientKey]: ""
                        }
                    });
                }
            }), $09c8b9c8d5e2e67c$var$__("Experimental:"), $09c8b9c8d5e2e67c$var$__experimentalGradientPickerControl && $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$__experimentalGradientPickerControl, {
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$backgroundGradientKey),
                value: meta[$09c8b9c8d5e2e67c$var$backgroundGradientKey]
            }), !!meta[$09c8b9c8d5e2e67c$var$backgroundUrlKey] && $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$RangeControl, {
                label: $09c8b9c8d5e2e67c$var$__("Opacity", "slide"),
                help: $09c8b9c8d5e2e67c$var$__("May be overridden by the block!"),
                value: meta[$09c8b9c8d5e2e67c$var$backgroundOpacityKey] ? 100 - parseInt(meta[$09c8b9c8d5e2e67c$var$backgroundOpacityKey], 10) : undefined,
                min: 0,
                max: 100,
                initialPosition: 0,
                onChange: (value)=>{
                    editPost({
                        meta: {
                            ...meta,
                            [$09c8b9c8d5e2e67c$var$backgroundOpacityKey]: 100 - value + ""
                        }
                    });
                }
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-background-image",
                title: $09c8b9c8d5e2e67c$var$__("Background Image", "slide"),
                icon: "format-image"
            }, $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$MediaUpload, {
                onSelect: (media)=>{
                    if (!media || !media.url) {
                        editPost({
                            meta: {
                                ...meta,
                                [$09c8b9c8d5e2e67c$var$backgroundUrlKey]: undefined,
                                [$09c8b9c8d5e2e67c$var$backgroundIdKey]: undefined,
                                [$09c8b9c8d5e2e67c$var$backgroundPositionKey]: undefined,
                                [$09c8b9c8d5e2e67c$var$backgroundOpacityKey]: undefined
                            }
                        });
                        return;
                    }
                    editPost({
                        meta: {
                            ...meta,
                            [$09c8b9c8d5e2e67c$var$backgroundUrlKey]: media.url,
                            [$09c8b9c8d5e2e67c$var$backgroundIdKey]: media.id + ""
                        }
                    });
                },
                allowedTypes: $09c8b9c8d5e2e67c$var$ALLOWED_MEDIA_TYPES,
                value: meta[$09c8b9c8d5e2e67c$var$backgroundIdKey] ? parseInt(meta[$09c8b9c8d5e2e67c$var$backgroundIdKey], 10) : undefined,
                render: ({ open: open  })=>$09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$Button, {
                        isDefault: true,
                        onClick: open
                    }, meta[$09c8b9c8d5e2e67c$var$backgroundUrlKey] ? $09c8b9c8d5e2e67c$var$__("Change") : $09c8b9c8d5e2e67c$var$__("Add Background Image"))
            }), " ", !!meta[$09c8b9c8d5e2e67c$var$backgroundUrlKey] && $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$Button, {
                isDefault: true,
                onClick: ()=>{
                    editPost({
                        meta: {
                            ...meta,
                            [$09c8b9c8d5e2e67c$var$backgroundUrlKey]: "",
                            [$09c8b9c8d5e2e67c$var$backgroundIdKey]: "",
                            [$09c8b9c8d5e2e67c$var$backgroundPositionKey]: "",
                            [$09c8b9c8d5e2e67c$var$backgroundOpacityKey]: ""
                        }
                    });
                }
            }, $09c8b9c8d5e2e67c$var$__("Remove")), $09c8b9c8d5e2e67c$var$e("br"), $09c8b9c8d5e2e67c$var$e("br"), !!meta[$09c8b9c8d5e2e67c$var$backgroundUrlKey] && $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$FocalPointPicker, {
                label: $09c8b9c8d5e2e67c$var$__("Focal Point Picker"),
                url: meta[$09c8b9c8d5e2e67c$var$backgroundUrlKey],
                value: (()=>{
                    if (!meta[$09c8b9c8d5e2e67c$var$backgroundPositionKey]) return;
                    let [x, y] = meta[$09c8b9c8d5e2e67c$var$backgroundPositionKey].split(" ");
                    x = parseFloat(x) / 100;
                    y = parseFloat(y) / 100;
                    return {
                        x: x,
                        y: y
                    };
                })(),
                onChange: (focalPoint)=>{
                    editPost({
                        meta: {
                            ...meta,
                            [$09c8b9c8d5e2e67c$var$backgroundPositionKey]: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
                        }
                    });
                }
            }), !!meta[$09c8b9c8d5e2e67c$var$backgroundUrlKey] && $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$RangeControl, {
                label: $09c8b9c8d5e2e67c$var$__("Opacity", "slide"),
                help: $09c8b9c8d5e2e67c$var$__("May be overridden by the block!"),
                value: meta[$09c8b9c8d5e2e67c$var$backgroundOpacityKey] ? parseInt(meta[$09c8b9c8d5e2e67c$var$backgroundOpacityKey], 10) : undefined,
                min: 0,
                max: 100,
                initialPosition: 100,
                onChange: (value)=>{
                    editPost({
                        meta: {
                            ...meta,
                            [$09c8b9c8d5e2e67c$var$backgroundOpacityKey]: value + ""
                        }
                    });
                }
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-palette",
                title: $09c8b9c8d5e2e67c$var$__("Color Palette", "slide"),
                icon: "art"
            }, $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$TextareaControl, {
                label: $09c8b9c8d5e2e67c$var$__("Comma separated list of color values. Please refresh the page to be able to use the palette.", "slide"),
                value: meta[$09c8b9c8d5e2e67c$var$colorPaletteKey],
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$colorPaletteKey)
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-css",
                title: $09c8b9c8d5e2e67c$var$__("Custom CSS", "slide"),
                icon: "editor-code"
            }, $09c8b9c8d5e2e67c$var$e((0, $a2e6c3553b124b9b$export$2e2bcd8739ae039), {
                value: meta[$09c8b9c8d5e2e67c$var$cssKey] || "/* Always a block prefix! */\n.wp-block-slide-slide {\n	\n}\n",
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$cssKey)
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-transition",
                title: $09c8b9c8d5e2e67c$var$__("Transition", "slide"),
                icon: "slides"
            }, $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$SelectControl, {
                label: $09c8b9c8d5e2e67c$var$__("Transition Style", "slide"),
                options: [
                    {
                        value: "none",
                        label: $09c8b9c8d5e2e67c$var$__("None", "slide")
                    },
                    {
                        value: "fade",
                        label: $09c8b9c8d5e2e67c$var$__("Fade", "slide")
                    },
                    {
                        value: "slide",
                        label: $09c8b9c8d5e2e67c$var$__("Slide", "slide")
                    },
                    {
                        value: "convex",
                        label: $09c8b9c8d5e2e67c$var$__("Convex", "slide")
                    },
                    {
                        value: "concave",
                        label: $09c8b9c8d5e2e67c$var$__("Concave", "slide")
                    },
                    {
                        value: "zoom",
                        label: $09c8b9c8d5e2e67c$var$__("Zoom", "slide")
                    }, 
                ],
                value: meta[$09c8b9c8d5e2e67c$var$transitionKey],
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$transitionKey)
            }), $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$SelectControl, {
                label: $09c8b9c8d5e2e67c$var$__("Background Transition Style", "slide"),
                options: [
                    {
                        value: "none",
                        label: $09c8b9c8d5e2e67c$var$__("None", "slide")
                    },
                    {
                        value: "fade",
                        label: $09c8b9c8d5e2e67c$var$__("Fade", "slide")
                    },
                    {
                        value: "slide",
                        label: $09c8b9c8d5e2e67c$var$__("Slide", "slide")
                    },
                    {
                        value: "convex",
                        label: $09c8b9c8d5e2e67c$var$__("Convex", "slide")
                    },
                    {
                        value: "concave",
                        label: $09c8b9c8d5e2e67c$var$__("Concave", "slide")
                    },
                    {
                        value: "zoom",
                        label: $09c8b9c8d5e2e67c$var$__("Zoom", "slide")
                    }, 
                ],
                value: meta[$09c8b9c8d5e2e67c$var$backgroundTransitionKey],
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$backgroundTransitionKey)
            }), $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$SelectControl, {
                label: $09c8b9c8d5e2e67c$var$__("Transition Speed", "slide"),
                options: [
                    {
                        value: "default",
                        label: $09c8b9c8d5e2e67c$var$__("Default", "slide")
                    },
                    {
                        value: "fast",
                        label: $09c8b9c8d5e2e67c$var$__("Fast", "slide")
                    },
                    {
                        value: "slow",
                        label: $09c8b9c8d5e2e67c$var$__("Slow", "slide")
                    }, 
                ],
                value: meta[$09c8b9c8d5e2e67c$var$transitionSpeedKey],
                onChange: (value)=>updateMeta(value, $09c8b9c8d5e2e67c$var$transitionSpeedKey)
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-controls",
                title: $09c8b9c8d5e2e67c$var$__("Controls", "slide"),
                icon: "leftright"
            }, $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$ToggleControl, {
                label: $09c8b9c8d5e2e67c$var$__("Control Arrows", "slide"),
                checked: meta[$09c8b9c8d5e2e67c$var$controlsKey] === "true",
                onChange: (value)=>updateMeta(value + "", $09c8b9c8d5e2e67c$var$controlsKey)
            }), $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$ToggleControl, {
                label: $09c8b9c8d5e2e67c$var$__("Progress Bar", "slide"),
                checked: meta[$09c8b9c8d5e2e67c$var$progressKey] === "true",
                onChange: (value)=>updateMeta(value + "", $09c8b9c8d5e2e67c$var$progressKey)
            })),
            $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$PluginDocumentSettingPanel, {
                name: "slide-pdf",
                title: $09c8b9c8d5e2e67c$var$__("PDF (Experimental)", "slide"),
                icon: "page"
            }, $09c8b9c8d5e2e67c$var$e("p", {}, $09c8b9c8d5e2e67c$var$e($09c8b9c8d5e2e67c$var$ExternalLink, {
                href: $09c8b9c8d5e2e67c$var$addQueryArgs(link, {
                    "print-pdf": true
                }),
                target: "_blank"
            }, $09c8b9c8d5e2e67c$var$__("Print (Save as PDF).", "slide")), $09c8b9c8d5e2e67c$var$e("br"), $09c8b9c8d5e2e67c$var$__("Enable backgrounds and remove margins.", "slide"))), 
        ];
    }
});


(function($) {
    $(document).ready(function() {
        var target = $("#editor").get(0);
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                checkHeight(mutation);
            });
        });
        var config = {
            childList: true,
            subtree: true,
            characterData: true
        };
        observer.observe(target, config);
        function checkHeight(element) {
            let target;
            if (element.type === "characterData") target = element.target.parentElement;
            else target = element.target;
            if (target.classList.contains("wp-block")) {
                const $parent = $(target).parent().parent().parent();
                if ($(target).parent().height() > 720) {
                    $parent.addClass("overflow-slide");
                    $parent.find(".oveflow-alert").remove();
                    $parent.append('<span class="oveflow-alert">Overflow warning. Please adjust the amount or size of content to fit slide.</span>');
                } else {
                    $parent.removeClass("overflow-slide");
                    $parent.find(".oveflow-alert").remove();
                }
            }
        }
    });
})(jQuery);




//# sourceMappingURL=index.js.map
