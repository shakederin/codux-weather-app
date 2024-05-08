import '../../styles/common/variables.css';
import '../../styles/common/style-guide.css';
import { createBoard } from '@wixc3/react-board';
import StyleGuide_board_module from './style-guide.board.module.scss';
import Classnames from 'classnames';
import SectionSvg from '../../assets/section.svg';
import Cloudy1Png from '../../assets/cloudy-1.png';
import RainPng from '../../assets/rain.png';
import CloudPng from '../../assets/cloud.png';
import SnowstormPng from '../../assets/snowstorm.png';
import SunPng from '../../assets/sun.png';
import SunAndCloudPng from '../../assets/sun-and-cloud.png';

export default createBoard({
    name: 'StyleGuide',
    Board: () => (
        <div className={Classnames(StyleGuide_board_module.root)}>
            <div className={StyleGuide_board_module.pageHeader}>
                <h1 className={StyleGuide_board_module.TitleHeader}>Style Guide</h1>
                <span className={StyleGuide_board_module.logo}>LOGO</span>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Typography</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Defines the fonts used for headings, body text, labels, etc., including size,
                    weight, and spacing.
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Font Family</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div className={StyleGuide_board_module.FontFamilyContainer}>
                        <span className={StyleGuide_board_module.FontFamilyAa}>Aa</span>
                        <span className={Classnames('pNormal')}>DM Sans</span>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Decorative title</h2>
                <div>
                    <div>
                        <p className={Classnames('decorative', StyleGuide_board_module.margin)}>
                            Decorative{' '}
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            decorative
                            <br />
                            normal 700 140px
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Main Heading / h1</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h1 className={Classnames('titleBold', StyleGuide_board_module.margin)}>
                            Title{' '}
                        </h1>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            titleBold
                            <br />
                            700 28px / normal
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Subheading / h2</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h2 className={Classnames(StyleGuide_board_module.margin, 'subtitle')}>
                            Subtitle Bold{' '}
                        </h2>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            subtitle
                            <br />
                            normal 700 28px
                        </div>
                    </div>
                    <div>
                        <h2
                            className={Classnames('subtitleNormal', StyleGuide_board_module.margin)}
                        >
                            Subtitle Normal
                        </h2>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            subtitleNormal
                            <br />
                            normal 400 28px
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Body / p</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('bodyRegular', StyleGuide_board_module.margin)}>
                            Body regular
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            bodyRegular
                            <br />
                            normal 400 22px
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('bodySmall', StyleGuide_board_module.margin)}>
                            Body Small
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            bodySmall
                            <br />
                            400 18px / normal
                        </div>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Colors</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Colors are a powerful tool in design for communicating meaning and influencing
                    user perception. Here&apos;s colors can contribute to the success of your design
                    by conveying specific
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>
                    Primary / Purple Gradient
                </h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.colorContainer,
                                'gradientTop',
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>gradientTop</div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.colorContainer,
                                'gradientBottom',
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>gradientBottom</div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.colorContainer,
                                'purpleGradientLeft',
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>radientLeft</div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.colorContainer,
                                'purpleGradientRight',
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            purpleGradientRight{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Secondary / Dark</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'white')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            white
                            <br />
                            #FFFFFF
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'black')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            Black
                            <br />
                            #2B2B31{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Icons</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Shadows help create the illusion of depth and dimension in a flat, 2D digital
                    space. By simulating how light interacts with objects in the real world, shadows
                    visually separate elements, define their shapes, and show their relative
                    positions.
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>
                    Primary / Purple Gradient
                </h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(
                                'purpleGradient',
                                StyleGuide_board_module.iconContainer,
                            )}
                        >
                            <img src={Cloudy1Png} alt="cloudy" />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>cloudy</div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.iconContainer}>
                            <img src={CloudPng} alt="cloud" />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>cloud</div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.iconContainer}>
                            <img src={SunPng} alt="sun" />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>sun</div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                'purpleGradientTop',
                                StyleGuide_board_module.iconContainer,
                            )}
                        >
                            <img src={RainPng} alt="sun cloud and rain" />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>rain</div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.iconContainer}>
                            <img src={SunAndCloudPng} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>cloud-sun</div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.iconContainer}>
                            <img src={SnowstormPng} alt="snowstorm" />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>snowstorm</div>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Shadows</h2>
                </div>
                <div className={StyleGuide_board_module.subsectionContainer}>
                    <div className={StyleGuide_board_module.FlexContainer}>
                        <div>
                            <div
                                className={Classnames(
                                    'shadow100',
                                    StyleGuide_board_module.shadowContainer,
                                )}
                            />
                            <div className={StyleGuide_board_module.subtitleValue}>shadow100</div>
                        </div>
                        <div>
                            <div
                                className={Classnames(
                                    'shadow200',
                                    StyleGuide_board_module.shadowContainer,
                                )}
                            />
                            <div className={StyleGuide_board_module.subtitleValue}>shadow200</div>
                        </div>
                        <div>
                            <div
                                className={Classnames(
                                    'shadow300',
                                    StyleGuide_board_module.shadowContainer,
                                )}
                            />
                            <div className={StyleGuide_board_module.subtitleValue}>shadow300</div>
                        </div>
                    </div>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Shadows help create the illusion of depth and dimension in a flat, 2D digital
                    space. By simulating how light interacts with objects in the real world, shadows
                    visually separate elements, define their shapes, and show their relative
                    positions.
                </p>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Spacing</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Spacing is a crucial element in design systems, as it dictates the negative
                    space or &quot;white space&quot; between UI components. This space plays a
                    significant role in visual Hierarchy, Aesthetics and Balance.
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Margin</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin2',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin2
                            <br />
                            2px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    'margin4',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin4
                            <br />
                            4px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin6',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin6
                            <br />
                            6px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin12',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin16',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin16
                            <br />
                            16px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin24',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin24
                            <br />
                            24px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin32',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin32
                            <br />
                            32px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin40',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin40
                            <br />
                            40px{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Padding</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding2',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding2
                            <br />
                            2px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                'padding4',
                                StyleGuide_board_module.paddingContainer,
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding4
                            <br />
                            4px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding6',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding6
                            <br />
                            6px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding8',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding8
                            <br />
                            8px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding12',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding16',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding16
                            <br />
                            16px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding24',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding24
                            <br />
                            24px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding32',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding32
                            <br />
                            32px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding40',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding40
                            <br />
                            40px{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1014,
        canvasWidth: 1021,
        canvasHeight: 1576,
        windowHeight: 1659,
    },
});
