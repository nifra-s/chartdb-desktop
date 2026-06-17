; Custom NSIS script for ChartDB installer
; Sets default install directory to Program Files (x86)

!macro preInit
  SetShellVarContext all
  StrCpy $INSTDIR "$PROGRAMFILES32\ChartDB"
!macroend
