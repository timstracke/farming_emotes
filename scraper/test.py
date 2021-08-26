import twitch

helix = twitch.Helix('980i1nzbo4q6hl9rd0r7it0m3g27er', 'vmcxpvo19a7tynb1jhrvcvifbmxve6')
print(helix.stream)
soda = helix.stream("sodapoppin")