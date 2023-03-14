export const buttons:stylesObj[] = [
  {
    id: 1,
    name: 'normal',
    button: 'Button Normal',
    styles: `.normal {
            width: 140px;
            height: 40px;
            border: 2px solid #000;
            font-weight: bold;
            background-color: transparent;
            transition: .3s ease;
            outline: none;
            cursor: pointer;
          }
          
          .normal:hover {
            background-color: #000;
            color: #fff;
          }
          
          .normal:focus {
            border: 1px solid #000;
          }
          
          .normal:disabled {
            opacity: 0.8;
          }
          `
  },
  {
    id: 2,
    name: 'shadow',
    button: 'Button with Shadow',
    styles: `.shadow {
            width: 140px;
            height: 40px;
            border: none;
            outline: none;
            color: #fff;
            font-weight: bold;
            background-color: #f87171;
            box-shadow: 0px 4px 6px -1px #dc2626;
            transition: .3s ease;
            cursor: pointer;
          }
          
          .shadow:hover {
            box-shadow: 0 10px 15px -3px #dc2626, 0 4px 6px -4px #dc2626;
          }

          .shadow:focus {
            border-radius: 10px;
          }

          .shadow:disabled {
            opacity: 0.8;
            box-shadow: none;
          }

          `
  },
  {
    id: 3,
    name: 'notion',
    button: 'Button Notion Style',
    styles: `.notion {
            width: 140px;
            height: 40px;
            border: 2px solid #000;
            box-shadow: 4px -2px 0px 0px;
            font-weight: bold;
            transition: .3s ease;
            cursor: pointer;
          }
          
          .notion:hover {
            box-shadow: none;
          }
          
          .notion:focus {
            box-shadow: none;
          }

          .notion:disabled {
            opacity: 0.8;
            box-shadow: none;
          }
          `
  },
  {
    id: 4,
    name: 'windows',
    button: 'Button Windows Vista',
    styles: `.windows {
          width: 140px;
          height: 40px;
          font-weight: 600;
          border-top: 2px solid #fff;
          border-left: 2px solid #fff;
          border-bottom: 2px solid #000;
          border-right: 2px solid #000;
          background-color: #d1d5db;
          transition: .3s ease;
          cursor: pointer;
        }
        
        .windows:active {
          box-shadow: 0 1px 2px 0 #000;
        }`
  },
  {
    id: 5,
    name: 'cyberpunk',
    button: "Button Cyberpunk",
    styles: `.cyberpunk {
        width: 140px;
        height: 40px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.05em;
        background-color: #e11d48;
        border: none;
        outline: none;
        box-shadow: 4px -2px 0px 0px #7dd3fc;
        transition: .3s ease;
        cursor: pointer;
      }
      
      .cyberpunk:hover {
        box-shadow: none;
        background-color: #7dd3fc;
        color: #e11d48;
      }
      
      .cyberpunk:focus {
        background-color: rgb(190, 18, 60);
        box-shadow: 4px -2px 0px 0px #0284c7;
      }

      .cyberpunk:disabled {
        opacity: 0.8;
        box-shadow: none;
      }

      `
  },
  {
    id: 6,
    name: 'btn-scale',
    button: 'Button with Scale effect',
    styles: `.scale-btn {
        width: 140px;
        height: 40px;
        border: none;
        outline: none;
        font-weight: bold;
        background-color: #3e9fee;
        color: #fff;
        cursor: pointer;
        transition: .4s ease;
      }
      
      .scale-btn:hover {
        transform: scale(0.8);
        border: 2px solid #3e9fee;
        color: #3e9fee;
        background-color: #fff;
      }`
  },
  {
    id: 7,
    name: 'btn-rounded',
    button: 'Rounded/Rect Borders',
    styles: `.btn-rounded {
        width: 140px;
        height: 40px;
        background-color: transparent;
        border: 2px solid #000;
        border-radius: 10px;
        outline: none;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .3s ease;
      }
      
      .btn-rounded:hover {
        border-radius: 0px;
        background-color: #000;
        color: #fff;
        border: 4px solid #fff;
      }`
  },
  {
    id: 8,
    name: 'btn-github',
    button: 'Github Style Button',
    styles: `.btn-github {
        appearance: none;
        background-color: #2ea44f;
        border: 1px solid rgba(27, 31, 35, .15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 6px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
      }

      .btn-github:focus:not(:focus-visible):not(.focus-visible) {
        box-shadow: none;
        outline: none;
      }

      .btn-github:hover {
        background-color: #2c974b;
      }

      .btn-github:focus {
        box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
        outline: none;
      }

      .btn-github:disabled {
        background-color: #94d3a2;
        border-color: rgba(27, 31, 35, .1);
        color: rgba(255, 255, 255, .8);
        cursor: default;
      }

      .btn-github:active {
        background-color: #298e46;
        box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
      }`
  }
]

