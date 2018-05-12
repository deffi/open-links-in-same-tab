# open-links-in-same-tab
A userscript that changes links not to open in a new tab

## Purpose

Browsers provide a way to open a link in a new tab (regardless of
what the link specifies), but not to open a link in the same tab.

This means that for regular links, the user has the choice where
to open the link, but for links that specify a new tab, there is
no way to open it in the same tab. The issue is made worse by the
fact that there is no easy way to see where a link will open.

This userscript addresses the issue by removing the attribute that
specifies opening in a new tab from all links. By default, all links
will therefore open in the same tab and the user remains in control
of where to open a link.
